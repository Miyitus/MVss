jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 5ea644b9-b69a-4b58-8192-62d3e84b60ba.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#0062B8",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#0062B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#0062B8",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#0062B8",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 5ea644b9-b69a-4b58-8192-62d3e84b60ba.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "target": "#s-Input_6"
                      },"1" ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "target": "#s-Input_6"
                      },"1" ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 3acc3f76-cff0-4bce-a65b-cfb446c8c420.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#C44741",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#C44741",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#C44741",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#C44741",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 3acc3f76-cff0-4bce-a65b-cfb446c8c420.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] a1e6ec6f-7ee2-4465-b372-2dc0e81ee516.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#292929",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#292929",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#292929",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#292929",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] a1e6ec6f-7ee2-4465-b372-2dc0e81ee516.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 25a53de8-e652-485b-8eea-61d2972783c8.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#52A552",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#52A552",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#52A552",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#52A552",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 25a53de8-e652-485b-8eea-61d2972783c8.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 633b5580-271e-42e2-be7c-6dc3edda1223.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#E1962D",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#E1962D",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#E1962D",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#E1962D",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 633b5580-271e-42e2-be7c-6dc3edda1223.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_off"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_on"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 17a84de6-bc99-4889-881a-5c0b25c0f6ec.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#E1962D",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#E1962D",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#E1962D",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#E1962D",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 17a84de6-bc99-4889-881a-5c0b25c0f6ec.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] db37f606-8485-4f6c-baca-0feeada1d8b5.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#CDCDCD",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] db37f606-8485-4f6c-baca-0feeada1d8b5.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "url('./images/[Generated] 67b9f96c-fc48-4332-92a0-ffd726e3ff61.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 67b9f96c-fc48-4332-92a0-ffd726e3ff61.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Unlock_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Unlock_button",
                    "type": "movewithcursor",
                    "containment": true,
                    "axis": "x"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .dragend", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-state_on")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_off"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-state_off")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-state_on"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#74B9EF",
                        "background-image": "url('./images/[Generated] ebf32042-9323-4e22-bdbe-53bd0092d663.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] ebf32042-9323-4e22-bdbe-53bd0092d663.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#74B9EF",
                        "background-image": "url('./images/[Generated] 7f78cfb0-aeeb-48cb-83ed-79190dc4d3c6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 + 0 + 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 7f78cfb0-aeeb-48cb-83ed-79190dc4d3c6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 + 0 + 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 7d10e1e9-e7da-42a1-a2bf-4f7a7eb1eaab.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 7d10e1e9-e7da-42a1-a2bf-4f7a7eb1eaab.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 118b8bb4-4432-4755-9d02-967fa28be9f9.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 118b8bb4-4432-4755-9d02-967fa28be9f9.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 3c25dedc-7615-48a6-8957-256b2d13b08b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 3c25dedc-7615-48a6-8957-256b2d13b08b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] db2194a3-aad9-4c40-b30e-2346c42bfb31.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] db2194a3-aad9-4c40-b30e-2346c42bfb31.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 21d93561-9f65-4984-9df7-a7709d0dd491.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 21d93561-9f65-4984-9df7-a7709d0dd491.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 7242e370-bc4f-4327-a530-17d9b8d1ddd7.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 7242e370-bc4f-4327-a530-17d9b8d1ddd7.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] c3d87635-1c87-4efc-8337-19823302eed3.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] c3d87635-1c87-4efc-8337-19823302eed3.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] f6bfc607-3936-495e-8dd1-68ce86249e9d.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] f6bfc607-3936-495e-8dd1-68ce86249e9d.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#CCCCCC",
                        "background-image": "url('./images/[Generated] a6f46801-08c3-46a6-9254-a61bc98b8cc8.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] a6f46801-08c3-46a6-9254-a61bc98b8cc8.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(177 + 0 + 0 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 8 - 8, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#CCCCCC",
                        "background-image": "url('./images/[Generated] 10beb5ba-55b7-4244-a279-68e1b1305ecb.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(168 + 0 + 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 10beb5ba-55b7-4244-a279-68e1b1305ecb.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(168 + 0 + 0 - 2 - 0, 0) + 'px'",
                        "height": "Math.max(28 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] c24bec5c-158a-4999-b77c-25d7be2ea3e0.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#0062B8",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#0062B8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#0062B8",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#0062B8",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] c24bec5c-158a-4999-b77c-25d7be2ea3e0.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(84 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "url('./images/[Generated] 44996733-b796-44d2-bb94-ec6f15a13bbd.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_4": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 44996733-b796-44d2-bb94-ec6f15a13bbd.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(68 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 531c68ce-7176-4608-869f-812b5dd0a4e6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#C44741",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#C44741",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#C44741",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#C44741",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_5": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 531c68ce-7176-4608-869f-812b5dd0a4e6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(78 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 20b1a7b6-4c3d-4215-ac96-76ccca4da9f7.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#292929",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#292929",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#292929",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#292929",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 20b1a7b6-4c3d-4215-ac96-76ccca4da9f7.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(198 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 2a0cbb34-ed98-46da-8e71-af6c1df0f37b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#52A552",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#52A552",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#52A552",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#52A552",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 2a0cbb34-ed98-46da-8e71-af6c1df0f37b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(82 + 0 + 0 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] ee330690-e193-4e21-b469-92825f0ac29e.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#E1962D",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#E1962D",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#E1962D",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#E1962D",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_6": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] ee330690-e193-4e21-b469-92825f0ac29e.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] b6044b3b-cd49-4eb1-9b89-565197bf5840.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_8": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] b6044b3b-cd49-4eb1-9b89-565197bf5840.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 1057ee2b-6fd1-4b5d-a4ea-70844fb77270.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_3": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 1057ee2b-6fd1-4b5d-a4ea-70844fb77270.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 89bf5e80-dbf6-44bc-8948-c7bb22ca0e55.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_9": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 89bf5e80-dbf6-44bc-8948-c7bb22ca0e55.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] f5e28139-146c-456b-84f0-b6470ad5cc5a.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_10": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] f5e28139-146c-456b-84f0-b6470ad5cc5a.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] e365c874-d1c2-4d93-a62f-eab71e3cfc35.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#E1962D",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#E1962D",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#E1962D",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#E1962D",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_7": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] e365c874-d1c2-4d93-a62f-eab71e3cfc35.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(92 + 0 + 0 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 + 0 + 0 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 9f9c4fc2-3d6b-4618-a35d-1044e6333e74.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_11": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 9f9c4fc2-3d6b-4618-a35d-1044e6333e74.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] 4aca8392-4980-49d3-858e-b96411478741.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_4": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 4aca8392-4980-49d3-858e-b96411478741.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] acade5b1-84a8-4470-bdbc-70fa351e2dff.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_12": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] acade5b1-84a8-4470-bdbc-70fa351e2dff.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image": "url('./images/[Generated] d74391eb-7b6e-4d9e-a830-b91e1af84bf5.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_13": {
                      "attributes-ie": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] d74391eb-7b6e-4d9e-a830-b91e1af84bf5.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_13")) {
      jEvent.undoCases(jFirer);
    }
  });(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "3dc3a787-f820-4ad9-a104-af0d58aab1d2": "Tem",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "5f33fcfd-26ef-409c-a461-95e7e49e8bca": "T",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);