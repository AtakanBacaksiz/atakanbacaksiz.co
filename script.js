$(window).on("load", function () {
  Webflow.validClick = function () {
    return true;
  };
});

function getModalElements() {
  return {
    modal: document.querySelector("#command-k"),
    cmodal: document.querySelector("#contact-modal"),
    modalcard: document.querySelector("#modal-card"),
    cmodalcard: document.querySelector("#contact-card"),
    contactBtn: document.querySelector("#contact-btn"),
    contactBtn2: document.querySelector("#contact-btn2"),
    span: document.querySelector(".modal-background"),
    cspan: document.querySelector(".modal-background.is-contact"),
    copyk: document.querySelector("#copy-mail-btn"),
    copyc: document.querySelector("#copy-mail-cbtn"),
    footercopy: document.querySelector("#footer-copy"),
    shortcuthero: document.querySelector("#shortcut-hero"),
    animatedDiv: document.querySelector(".toast-message"),
  };
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#copy-wrap").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      this.querySelectorAll("#mail-text").forEach((target) =>
        target.classList.add("underline")
      );
    });
  });

  document.querySelectorAll("#copy-wrap").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      this.querySelectorAll("#mail-text").forEach((target) =>
        target.classList.remove("underline")
      );
    });
  });

  // Hover in on #item-1
  document.querySelectorAll("#smartcoach").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      document
        .querySelectorAll(".bg-on-hover-project")
        .forEach((target) => target.classList.add("clip-path-1"));
    });
  });

  // Hover out on #item-1
  document.querySelectorAll("#smartcoach").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".bg-on-hover-project")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.remove("clip-path-1"))
        );
    });
  });

  // Hover in on #item-2
  document.querySelectorAll("#greatr").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      document
        .querySelectorAll(".bg-on-hover-project")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.add("clip-path-2"))
        );
    });
  });

  // Hover out on #item-2
  document.querySelectorAll("#greatr").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".bg-on-hover-project")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.remove("clip-path-2"))
        );
    });
  });

  // Hover in on #navbar-1
  document.querySelectorAll("#navbar-1").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      document
        .querySelectorAll(".bg-on-hover")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.add("clip-path-1"))
        );
    });
  });

  // Hover out on #navbar-1
  document.querySelectorAll("#navbar-1").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".bg-on-hover")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.remove("clip-path-1"))
        );
    });
  });

  // Hover in on #navbar-2
  document.querySelectorAll("#navbar-2").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      document
        .querySelectorAll(".bg-on-hover")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.add("clip-path-2"))
        );
    });
  });

  // Hover out on #navbar-2
  document.querySelectorAll("#navbar-2").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".bg-on-hover")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.remove("clip-path-2"))
        );
    });
  });

  // Hover in on #contact-btn
  document.querySelectorAll("#contact-btn").forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      document
        .querySelectorAll(".bg-on-hover")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.add("clip-path-3"))
        );
    });
  });

  // Hover out on #contact-btn
  document.querySelectorAll("#contact-btn").forEach((trigger) => {
    trigger.addEventListener("mouseout", function () {
      document
        .querySelectorAll(".bg-on-hover")
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.remove("clip-path-3"))
        );
    });
  });
});

// Hover in on #resume
document.querySelectorAll("#resume").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("clip-path-2"))
      );
  });
});

// Hover out on #resume
document.querySelectorAll("#resume").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("clip-path-2"))
      );
  });
});

// Hover in on #contact
document.querySelectorAll("#contact-btn2").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("clip-path-3"))
      );
  });
});

// Hover out on #contact
document.querySelectorAll("#contact-btn2").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("clip-path-3"))
      );
  });
});

// Hover in on #copy-mail-btn
document.querySelectorAll("#copy-mail-btn").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("clip-path-4"))
      );
  });
});

// Hover out on #copy-mail-btn
document.querySelectorAll("#copy-mail-btn").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("clip-path-4"))
      );
  });
});
// Hover in on #cmd1
document.querySelectorAll("#about").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("clip-path-1"))
      );
  });
});

// Hover out on #about
document.querySelectorAll("#about").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("clip-path-1"))
      );
  });
});

// Hover in on #cmd1
document.querySelectorAll("#cmd1").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("cp1"))
      );
  });
});

// Hover out on #cmd1
document.querySelectorAll("#cmd1").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("cp1"))
      );
  });
});

// Hover in on #cmd2
document.querySelectorAll("#cmd2").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("cp2"))
      );
  });
});

// Hover out on #cmd2
document.querySelectorAll("#cmd2").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("cp2"))
      );
  });
});

// Hover in on #cmd3
document.querySelectorAll("#cmd3").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("cp3"))
      );
  });
});

// Hover out on #cmd3
document.querySelectorAll("#cmd3").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("cp3"))
      );
  });
});

// Hover in on #cmd4
document.querySelectorAll("#cmd4").forEach((trigger) => {
  trigger.addEventListener("mouseover", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.add("cp4"))
      );
  });
});

// Hover out on #cmd4
document.querySelectorAll("#cmd4").forEach((trigger) => {
  trigger.addEventListener("mouseout", function () {
    document
      .querySelectorAll(".bg-on-hover-cmd2")
      .forEach((target) =>
        [...target.parentElement.children]
          .filter((c) => c === target)
          .forEach((sibling) => sibling.classList.remove("cp4"))
      );
  });
});

const {
  modal,
  cmodal,
  modalcard,
  cmodalcard,
  contactBtn,
  contactBtn2,
  span,
  cspan,
  copyk,
  copyc,
  footercopy,
  shortcuthero,
  animatedDiv,
} = getModalElements();

function showToast(animatedDiv) {
  if (animatedDiv) {
    animatedDiv.style.display = "flex";
    animatedDiv.style.opacity = "0";
    animatedDiv.style.transform = "translateY(64px) scale(0.95)";

    requestAnimationFrame(() => {
      animatedDiv.style.transition =
        "opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)";
      animatedDiv.style.opacity = "1";
      animatedDiv.style.transform = "translateY(0)";
    });

    setTimeout(() => {
      if (animatedDiv) {
        animatedDiv.style.opacity = "0";
        animatedDiv.style.transform = "translateY(64px) scale(0.95)";
        setTimeout(() => {
          animatedDiv.style.display = "none";
        }, 300);
      }
    }, 3000);
  }
}

if (copyc) {
  copyc.addEventListener("click", function () {
    showToast(animatedDiv);
  });
}

if (copyk) {
  copyk.addEventListener("click", function () {
    showToast(animatedDiv);
  });
}

if (footercopy) {
  footercopy.addEventListener("click", function () {
    showToast(animatedDiv);
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", function () {
    cmodal.style.display = "flex";
    cmodalcard.style.transform = "scale(0.99) translateY(-10px)";
    cmodalcard.style.opacity = "0";

    requestAnimationFrame(() => {
      cmodalcard.style.transition =
        "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
      cmodalcard.style.transform = "scale(1) translateY(0)";
      cmodalcard.style.opacity = "1";
    });
  });
}

if (shortcuthero) {
  shortcuthero.addEventListener("click", function () {
    modal.style.display = "flex";
    cmodal.style.display = "none";

    modalcard.style.transform = "scale(0.99) translateY(-10px)";
    modalcard.style.opacity = "0";

    requestAnimationFrame(() => {
      modalcard.style.transition =
        "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
      modalcard.style.transform = "scale(1) translateY(0)";
      modalcard.style.opacity = "1";
    });
  });
}

if (contactBtn2) {
  contactBtn2.addEventListener("click", function () {
    cmodal.style.display = "flex";
    modal.style.display = "none";
    cmodalcard.style.transform = "scale(0.99) translateY(-10px)";
    cmodalcard.style.opacity = "0";

    requestAnimationFrame(() => {
      cmodalcard.style.transition =
        "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
      cmodalcard.style.transform = "scale(1) translateY(0)";
      cmodalcard.style.opacity = "1";
    });
  });
}

document.addEventListener("keydown", function (event) {
  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    if (modalcard && modal) {
      modalcard.style.transform = "scale(0.99) translateY(-10px)";
      modalcard.style.opacity = "0";
      modal.style.display = "flex";
      cmodal.style.display = "none";

      requestAnimationFrame(() => {
        modalcard.style.transition =
          "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
        modalcard.style.transform = "scale(1) translateY(0)";
        modalcard.style.opacity = "1";
      });

      event.preventDefault();
    }
  }

  if (
    event.key === "c" &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey
  ) {
    if (cmodalcard && cmodal && modal) {
      cmodalcard.style.transform = "scale(1) translateY(0)";
      cmodalcard.animate(
        [
          {
            transform: "scaleX(0.99) scaleY(0.99) translateY(-10px)",
            opacity: 0,
          },
          { transform: "scale(1) translateY(0)", opacity: 1 },
        ],
        {
          duration: 100,
          easing: "ease-out",
          fill: "forwards",
        }
      );
      cmodal.style.display = cmodal.style.display === "flex" ? "none" : "flex";
      modal.style.display = "none";
      event.preventDefault();
    }
  }

  if (event.key === "Escape") {
    if (modalcard && modal) {
      modalcard.style.transition =
        "transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)";
      modalcard.style.transform = "scale(0.99) translateY(-10px)";
      modalcard.style.opacity = "0";

      setTimeout(() => {
        modal.style.display = "none";
      }, 0);

      event.preventDefault();
    }

    if (cmodal) {
      cmodal.style.display = "none";
      event.preventDefault();
    }
  }

  if (
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key) &&
    modal &&
    modal.style.display === "flex"
  ) {
    event.preventDefault();
    const currentLink = document.activeElement.closest("a:not(#ignoreLink)");
    const links = modal.querySelectorAll("a:not(#ignoreLink)");
    const currentIndex = Array.from(links).indexOf(currentLink);
    const nextIndex =
      (currentIndex +
        (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1) +
        links.length) %
      links.length;
    links[nextIndex].focus();
    modal.scrollTop = links[nextIndex].offsetTop - modal.offsetTop;
  }
});

if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

if (cspan) {
  cspan.onclick = function () {
    cmodal.style.display = "none";
  };
}

if (navigator.userAgent.indexOf("Mac OS X") !== -1) {
  $("#ctrl-e, #ctrl-k").hide();
  $("#cmd-e, #cmd-k").show();
} else {
  $("#ctrl-e, #ctrl-k").show();
  $("#cmd-e, #cmd-k").hide();
}
