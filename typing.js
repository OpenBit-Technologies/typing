// SPDX-FileCopyrightText: 2024 OpenBit Technologies
// SPDX-FileContributor: Hugo Rodrigues
//
// SPDX-License-Identifier: MIT

"use strick";

function typingChild(element) {
    effect = element.getAttribute("typing-effect") || "fade";
    element.classList.add(`typing-effect-${effect}-active`);
}

function typing(element) {
    const current = element.innerText;
    const full = element.getAttribute("typing-text");

    if (current.length < full.length) {
        let text = element.innerText;
        text += full[current.length];
        if (full[current.length] == " ") {
            text += full[current.length + 1];
        }
        element.innerText = text;
        setTimeout(typing, element.getAttribute("typing-cadence") || 50, element);
    } else if (element.getAttribute("typing-name")) {
        childs = document.querySelectorAll('[typing-parent="' + element.getAttribute("typing-name") + '"]');
        for (let i = 0; i < childs.length; i++) {
            setTimeout(typingChild, childs[i].getAttribute("typing-effect-start") || 0, childs[i]);
        }
    }
}

window.onload = function() {
    elements = document.getElementsByClassName("typing");
    for (let i = 0; i < elements.length; i++) {
        element = elements[i];
        element.setAttribute("typing-text", element.innerText);
        element.innerText = "";
        setTimeout(typing, element.getAttribute("typing-start") || 0, element);
    }
}
