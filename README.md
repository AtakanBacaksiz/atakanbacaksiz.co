# atakanbacaksiz.co

Personal portfolio website for Atakan Bacaksiz.

## System Health Check

This repository includes a comprehensive system health check tool to monitor the portfolio website's status and performance.

### Features

The health check system monitors:

- **DOM Status** - Verifies the Document Object Model is fully loaded and accessible
- **Browser Compatibility** - Checks browser features and compatibility
- **Performance Metrics** - Monitors page load times and memory usage
- **Local Storage** - Verifies storage availability and usage
- **Console Status** - Tracks console errors and warnings
- **Resource Loading** - Monitors loading of scripts, stylesheets, and images

### Usage

Open `health-check.html` in your browser to view the system health dashboard.

The health check:
- Runs automatically when the page loads
- Can be manually triggered by clicking "Run Health Check"
- Auto-refreshes every 5 minutes
- Displays real-time status with color-coded indicators:
  - Green: All systems operational
  - Yellow: Minor issues detected
  - Red: Critical issues detected

### Files

- `health-check.html` - Health check dashboard interface
- `health-check.js` - Health monitoring and diagnostic script

### Development

Built with vanilla JavaScript and modern browser APIs:
- Performance API for timing metrics
- LocalStorage API for storage monitoring
- Resource Timing API for resource loading analysis
