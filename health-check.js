// System Health Check Script for atakanbacaksiz.co

class HealthChecker {
    constructor() {
        this.checks = [];
        this.results = [];
    }

    // Run all health checks
    async runAllChecks() {
        this.results = [];

        await this.checkDOMStatus();
        await this.checkBrowserCompatibility();
        await this.checkPerformance();
        await this.checkLocalStorage();
        await this.checkConsoleErrors();
        await this.checkResourceLoading();

        this.updateUI();
    }

    // Check if DOM is fully loaded and accessible
    async checkDOMStatus() {
        const check = {
            name: 'DOM Status',
            status: 'healthy',
            icon: '✓',
            details: []
        };

        try {
            const domReady = document.readyState === 'complete';
            const bodyExists = document.body !== null;
            const headExists = document.head !== null;

            check.details.push(`Ready State: ${document.readyState}`);
            check.details.push(`Body Element: ${bodyExists ? 'Present' : 'Missing'}`);
            check.details.push(`Head Element: ${headExists ? 'Present' : 'Missing'}`);
            check.details.push(`Total Elements: ${document.querySelectorAll('*').length}`);

            if (!domReady || !bodyExists || !headExists) {
                check.status = 'warning';
                check.icon = '⚠';
            }
        } catch (error) {
            check.status = 'error';
            check.icon = '✗';
            check.details.push(`Error: ${error.message}`);
        }

        this.results.push(check);
    }

    // Check browser compatibility
    async checkBrowserCompatibility() {
        const check = {
            name: 'Browser Compatibility',
            status: 'healthy',
            icon: '✓',
            details: []
        };

        try {
            const userAgent = navigator.userAgent;
            const browser = this.detectBrowser(userAgent);

            check.details.push(`Browser: ${browser}`);
            check.details.push(`Platform: ${navigator.platform}`);
            check.details.push(`Online: ${navigator.onLine ? 'Yes' : 'No'}`);
            check.details.push(`Cookies: ${navigator.cookieEnabled ? 'Enabled' : 'Disabled'}`);

            // Check for essential features
            const features = {
                'LocalStorage': typeof(Storage) !== 'undefined',
                'Fetch API': typeof(fetch) !== 'undefined',
                'Promises': typeof(Promise) !== 'undefined',
                'ES6 Classes': typeof(class {}) === 'function'
            };

            const unsupported = Object.entries(features)
                .filter(([_, supported]) => !supported)
                .map(([name, _]) => name);

            if (unsupported.length > 0) {
                check.status = 'warning';
                check.icon = '⚠';
                check.details.push(`Unsupported: ${unsupported.join(', ')}`);
            }
        } catch (error) {
            check.status = 'error';
            check.icon = '✗';
            check.details.push(`Error: ${error.message}`);
        }

        this.results.push(check);
    }

    // Check performance metrics
    async checkPerformance() {
        const check = {
            name: 'Performance Metrics',
            status: 'healthy',
            icon: '✓',
            details: []
        };

        try {
            if (window.performance && window.performance.timing) {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;

                if (loadTime > 0) {
                    check.details.push(`Page Load Time: ${loadTime}ms`);
                    check.details.push(`DOM Ready Time: ${domReady}ms`);

                    if (loadTime > 3000) {
                        check.status = 'warning';
                        check.icon = '⚠';
                        check.details.push('Warning: Slow page load');
                    }
                }

                // Memory usage (if available)
                if (performance.memory) {
                    const memoryMB = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
                    check.details.push(`Memory Usage: ${memoryMB} MB`);
                }
            } else {
                check.details.push('Performance API not available');
            }
        } catch (error) {
            check.status = 'warning';
            check.icon = '⚠';
            check.details.push(`Error: ${error.message}`);
        }

        this.results.push(check);
    }

    // Check localStorage availability and usage
    async checkLocalStorage() {
        const check = {
            name: 'Local Storage',
            status: 'healthy',
            icon: '✓',
            details: []
        };

        try {
            if (typeof(Storage) !== 'undefined') {
                const testKey = '__health_check_test__';
                localStorage.setItem(testKey, 'test');
                localStorage.removeItem(testKey);

                const itemCount = localStorage.length;
                check.details.push(`Status: Available`);
                check.details.push(`Items Stored: ${itemCount}`);

                // Estimate storage usage
                let totalSize = 0;
                for (let key in localStorage) {
                    if (localStorage.hasOwnProperty(key)) {
                        totalSize += localStorage[key].length + key.length;
                    }
                }
                check.details.push(`Storage Used: ~${(totalSize / 1024).toFixed(2)} KB`);
            } else {
                check.status = 'warning';
                check.icon = '⚠';
                check.details.push('LocalStorage not available');
            }
        } catch (error) {
            check.status = 'error';
            check.icon = '✗';
            check.details.push(`Error: ${error.message}`);
        }

        this.results.push(check);
    }

    // Check for console errors
    async checkConsoleErrors() {
        const check = {
            name: 'Console Status',
            status: 'healthy',
            icon: '✓',
            details: []
        };

        try {
            // Store reference to original console methods
            if (!window._healthCheckErrorCount) {
                window._healthCheckErrorCount = 0;
                window._healthCheckWarningCount = 0;

                const originalError = console.error;
                const originalWarn = console.warn;

                console.error = function(...args) {
                    window._healthCheckErrorCount++;
                    originalError.apply(console, args);
                };

                console.warn = function(...args) {
                    window._healthCheckWarningCount++;
                    originalWarn.apply(console, args);
                };
            }

            check.details.push(`Errors Logged: ${window._healthCheckErrorCount || 0}`);
            check.details.push(`Warnings Logged: ${window._healthCheckWarningCount || 0}`);
            check.details.push('Console: Available');

            if (window._healthCheckErrorCount > 0) {
                check.status = 'warning';
                check.icon = '⚠';
            }
        } catch (error) {
            check.status = 'warning';
            check.icon = '⚠';
            check.details.push(`Error: ${error.message}`);
        }

        this.results.push(check);
    }

    // Check resource loading
    async checkResourceLoading() {
        const check = {
            name: 'Resource Loading',
            status: 'healthy',
            icon: '✓',
            details: []
        };

        try {
            const resources = performance.getEntriesByType('resource');
            const scripts = resources.filter(r => r.initiatorType === 'script').length;
            const stylesheets = resources.filter(r => r.initiatorType === 'link' || r.initiatorType === 'css').length;
            const images = resources.filter(r => r.initiatorType === 'img').length;

            check.details.push(`Scripts Loaded: ${scripts}`);
            check.details.push(`Stylesheets Loaded: ${stylesheets}`);
            check.details.push(`Images Loaded: ${images}`);
            check.details.push(`Total Resources: ${resources.length}`);

            // Check for failed resources
            const failed = resources.filter(r => r.responseEnd === 0);
            if (failed.length > 0) {
                check.status = 'warning';
                check.icon = '⚠';
                check.details.push(`Failed Resources: ${failed.length}`);
            }
        } catch (error) {
            check.status = 'warning';
            check.icon = '⚠';
            check.details.push(`Error: ${error.message}`);
        }

        this.results.push(check);
    }

    // Update UI with check results
    updateUI() {
        const container = document.getElementById('checksContainer');
        const overallStatus = document.getElementById('overallStatus');
        const timestamp = document.getElementById('timestamp');

        // Clear existing content
        container.innerHTML = '';

        // Calculate overall status
        const hasError = this.results.some(r => r.status === 'error');
        const hasWarning = this.results.some(r => r.status === 'warning');

        if (hasError) {
            overallStatus.className = 'status-badge status-error';
            overallStatus.textContent = '✗ System Issues Detected';
        } else if (hasWarning) {
            overallStatus.className = 'status-badge status-warning';
            overallStatus.textContent = '⚠ Minor Issues Detected';
        } else {
            overallStatus.className = 'status-badge status-healthy';
            overallStatus.textContent = '✓ All Systems Operational';
        }

        // Create check items
        this.results.forEach(check => {
            const item = document.createElement('div');
            item.className = `check-item ${check.status}`;

            const header = document.createElement('div');
            header.className = 'check-header';
            header.innerHTML = `
                <span class="check-name">${check.name}</span>
                <span class="check-status">${check.icon}</span>
            `;

            const details = document.createElement('div');
            details.className = 'check-details';
            details.innerHTML = check.details.map(d => `<div class="metric">
                <span class="metric-label">${d.split(':')[0]}:</span>
                <span class="metric-value">${d.split(':')[1] || ''}</span>
            </div>`).join('');

            item.appendChild(header);
            item.appendChild(details);
            container.appendChild(item);
        });

        // Update timestamp
        const now = new Date();
        timestamp.textContent = `Last checked: ${now.toLocaleString()}`;
    }

    // Detect browser from user agent
    detectBrowser(userAgent) {
        if (userAgent.indexOf('Firefox') > -1) return 'Mozilla Firefox';
        if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) return 'Opera';
        if (userAgent.indexOf('Trident') > -1) return 'Internet Explorer';
        if (userAgent.indexOf('Edge') > -1) return 'Microsoft Edge';
        if (userAgent.indexOf('Chrome') > -1) return 'Google Chrome';
        if (userAgent.indexOf('Safari') > -1) return 'Safari';
        return 'Unknown';
    }
}

// Initialize health checker
const healthChecker = new HealthChecker();

// Run health check on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        healthChecker.runAllChecks();
    }, 500);
});

// Function to manually trigger health check
function runHealthCheck() {
    const button = document.querySelector('.refresh-btn');
    const container = document.getElementById('checksContainer');

    button.disabled = true;
    button.textContent = '⏳ Running Health Check...';
    container.classList.add('loading');

    setTimeout(() => {
        healthChecker.runAllChecks();
        button.disabled = false;
        button.textContent = '🔄 Run Health Check';
        container.classList.remove('loading');
    }, 500);
}

// Auto-refresh every 5 minutes
setInterval(() => {
    healthChecker.runAllChecks();
}, 300000);
