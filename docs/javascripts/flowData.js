/*
    # Notes
    This script stores the data source for the Flow Calculator logic. Only make edits to this script, do not touch the flowControllerLogic.js script.

    # Adding a New Aerodrome
    To add a new aerodrome, add it to the flowData array below. Copy/paste the ### Calculator UI section from a terminal page like Melbourne or Sydney onto the target markdown page and ensure that the flowControllerLogic.js script is referenced correctly. Update the 'data-aerodrome' attribute in the HTML to match the new aerodrome ICAO code.

    The flowData object is structured as follows:

        "<aerodrome ICAO>": {
            "<runway title>": {
                "<arrival name>": {
                    "aircraft": {
                        "<aircraft title>": <feeder fix to runway time in minutes>
                    },
                    "corrections": {
                        "<speed title>": <delay in minutes (positive for extra delay, negative for less delay)>
                    }
                }

    # Limitations
    - Only one calculator of each type (i.e. Landing Time and Feeder Fix Time) can be rendered on each page for a given aerodrome (multiple calculators can be rendered for different aerodromes on the same page)
*/

export const flowData = {
    "YMML": {
        "09": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "PORTS STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }          
        },
        "16": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 9,
                    "Non-Jet": 10
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WAREN M STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WENDY P STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "27": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 9,
                    "Non-Jet": 10
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "34": {
            "ARBEY STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BOYSE A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BOYSE V STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LIZZI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LIZZI V STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WAREN A/V STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "PORTS STAR": {
                "aircraft": {
                    "Jet & DH8D": 7,
                    "Non-Jet": 8
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "WENDY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        }
    },
    "YSSY": {
        "07": {
            "BOREE A/P STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MEPIL (YAKKA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "ODALE (WELSH FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        },
        "16L": {
            "BOREE A/P STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MEPIL (YAKKA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ODALE (WELSH FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "16R": {
            "BOREE A/P STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MEPIL (YAKKA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ODALE (WELSH FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "25": {
            "BOREE A/P STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MEPIL (YAKKA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ODALE (WELSH FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "34L": {
            "BOREE A/P STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MEPIL (YAKKA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ODALE (WELSH FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "34R": {
            "BOREE A/P STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MEPIL (YAKKA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MARLN STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "RIVET STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ODALE (WELSH FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        }
    },
    "YSCB": {
        "17": {
            "AVBEG STAR": {
                "aircraft": {
                    "Jet": 8,
                    "Non-Jet": 9
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "BUNGO A STAR": {
                "aircraft": {
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "LEECE A STAR": {
                "aircraft": {
                    "Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LEECE Y STAR": {
                "aircraft": {
                    "Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MANDA A STAR": {
                "aircraft": {
                    "Jet": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MANDA X STAR": {
                "aircraft": {
                    "Jet": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
        },
        "30": {
            "BUNGO V STAR": {
                "aircraft": {
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        },
        "35": {
            "AVBEG STAR": {
                "aircraft": {
                    "Jet": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LEECE A STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LEECE V STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LEECE W STAR": {
                "aircraft": {
                    "Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LEECE Y STAR": {
                "aircraft": {
                    "Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BUNGO A STAR": {
                "aircraft": {
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BUNGO V STAR": {
                "aircraft": {
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "BUNGO W STAR": {
                "aircraft": {
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BUNGO Y STAR": {
                "aircraft": {
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "POLLI A STAR": {
                "aircraft": {
                    "Jet": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "POLLI X STAR": {
                "aircraft": {
                    "Jet": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        }
    },
    "YMHB": {
        "12": {
            "IPLET A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "IPLET V STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "IPLET W STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MORGO A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        },
        "30": {
            "IPLET A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "IPLET V STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "IPLET W STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MORGO A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORGO V STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORGO W STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        }
    },
    "YMLT": {
        "14R": {
            "IRSOM MLTNE": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MIMIM MLTNG": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LATUM MLTND": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "32L": {
            "IRSOM NODAS MLTSC": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "MIMIM ELREL MLTSA": {
                "aircraft": {
                    "Jet & DH8D": 19,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LATUM MLTSB": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        }
    },
    "YBBN": {
        "01L": {
            "BLAKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ENLIP A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "GOMOL A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORBI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORBI V STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SMOKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SMOKA X STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TEBOT A STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "UGTUG A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WOODY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WOODY V STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        },
        "01R": {
            "BLAKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BLAKA X STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ENLIP A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "GOMOL A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "GOMOL V STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "GOMOL X STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORBI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SMOKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SMOKA M STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "TEBOT A STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TEBOT X STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "UGTUG A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "UGTUG X STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WOODY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "19L": {
            "BLAKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 19,
                    "Non-Jet": 22
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BLAKA X STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ENLIP A STAR": {
                "aircraft": {
                    "Jet & DH8D": 20,
                    "Non-Jet": 23
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ENLIP X STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "GOMOL A STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "GOMOL V STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "GOMOL X STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORBI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SMOKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TEBOT A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "UGTUG A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "UGTUG X STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "WOODY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "19R": {
            "BLAKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 21,
                    "Non-Jet": 24
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ENLIP A STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ENLIP X STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "GOMOL A STAR": {
                "aircraft": {
                    "Jet & DH8D": 20,
                    "Non-Jet": 23
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ISPON A (ENLIP trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 20,
                    "Non-Jet": 23
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ISPON A (BLAKA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 19,
                    "Non-Jet": 22
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ISPON A (GOMOL trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 19,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "ISPON A (UGTUG trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORBI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "MORBI V STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "SMOKA A STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SMOKA X STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "TEBOT A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "UGTUG A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WOODY A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WOODY V STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        }
    },
    "YBCG": {
        "14": {
            "BERNI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BERNI V STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "BERNI Y STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAMSI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAMSI Y STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "BN Y177 IDRIL CG2NC": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "32": {
            "BERNI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "BERNI V STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "LAMSI A STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "LAMSI Y STAR": {
                "aircraft": {
                    "Jet & DH8D": 10,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "BN Y177 IDRIL CG2SA": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        }
    },
    "YPDN": {
        "11": {
            "ANUPA A/X (SUDAG FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "GATOR A/X STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "VEGPU A/X STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "VEGPU W STAR": {
                "aircraft": {
                    "Jet & DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "WANGI A/X STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WANGI W STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "29": {
            "ANUPA A/X (SUDAG FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "GATOR A/X STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "VEGPU A/X STAR": {
                "aircraft": {
                    "Jet & DH8D": 8,
                    "Non-Jet": 9
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "WANGI A/X STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "WANGI W STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        }
    },
    "YPPH": {
        "03": {
            "DAYLR A STAR": {
                "aircraft": {
                    "DH8D": 12,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "DAYLR V STAR": {
                "aircraft": {
                    "DH8D": 10,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "DAYLR X STAR": {
                "aircraft": {
                    "DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "IPMOR A (KAGMI FF) STAR": {
                "aircraft": {
                    "Jet": 17,
                    "DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "JULIM A STAR": {
                "aircraft": {
                    "Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "JULIM V STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "JULIM X STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KABLI A STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KABLI V STAR": {
                "aircraft": {
                    "Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KABLI X STAR": {
                "aircraft": {
                    "Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAVEX A STAR": {
                "aircraft": {
                    "DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAVEX V STAR": {
                "aircraft": {
                    "DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAVEX X STAR": {
                "aircraft": {
                    "DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SAPKO A STAR": {
                "aircraft": {
                    "DH8D": 18,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SAPKO V STAR": {
                "aircraft": {
                    "DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SAPKO X STAR": {
                "aircraft": {
                    "DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SOLUS A STAR": {
                "aircraft": {
                    "Jet": 11,
                    "DH8D": 11,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "SOLUS V STAR": {
                "aircraft": {
                    "Jet": 10,
                    "DH8D": 10,
                    "Non-Jet": 12
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "SOLUS X STAR": {
                "aircraft": {
                    "Jet": 10,
                    "DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        },
        "06": {
            "DAYLR A STAR": {
                "aircraft": {
                    "DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "DAYLR V STAR": {
                "aircraft": {
                    "DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "IPMOR A (KAGMI FF) STAR": {
                "aircraft": {
                    "Jet": 14,
                    "DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "JULIM A STAR": {
                "aircraft": {
                    "Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "JULIM V STAR": {
                "aircraft": {
                    "Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KABLI A STAR": {
                "aircraft": {
                    "Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KABLI V STAR": {
                "aircraft": {
                    "Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAVEX A STAR": {
                "aircraft": {
                    "DH8D": 17,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAVEX V STAR": {
                "aircraft": {
                    "DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SAPKO A STAR": {
                "aircraft": {
                    "DH8D": 19,
                    "Non-Jet": 22
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SAPKO V STAR": {
                "aircraft": {
                    "DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SOLUS A STAR": {
                "aircraft": {
                    "Jet": 12,
                    "DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SOLUS V STAR": {
                "aircraft": {
                    "Jet": 11,
                    "DH8D": 11,
                    "Non-Jet": 13
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        },
        "21": {
            "IPMOR A (KAGMI FF) STAR": {
                "aircraft": {
                    "Jet": 15,
                    "DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "JULIM A STAR": {
                "aircraft": {
                    "Jet": 10
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "KABLI A STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAVEX A STAR": {
                "aircraft": {
                    "DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SAPKO A STAR": {
                "aircraft": {
                    "DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "SOLUS A STAR": {
                "aircraft": {
                    "Jet": 14,
                    "DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            }
        },
        "24": {
            "IPMOR A (KAGMI FF) STAR": {
                "aircraft": {
                    "Jet": 17,
                    "DH8D": 17,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "JULIM A STAR": {
                "aircraft": {
                    "Jet": 10
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "KABLI A STAR": {
                "aircraft": {
                    "Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "LAVEX A STAR": {
                "aircraft": {
                    "DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "SAPKO A STAR": {
                "aircraft": {
                    "DH8D": 10,
                    "Non-Jet": 11
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "SOLUS A STAR": {
                "aircraft": {
                    "Jet": 12,
                    "DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            }
        }
    },
    "YBCS": {
        "15": {
            "CODIE A (ANDOP trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "CODIE A (AVDAN trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "CODIE A (LOCKA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "CODIE A (OVLET trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "CODIE A (PUNIT trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "CODIE A (ZANEY trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KASPI B/V (ANDOP trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KASPI B/V (AVDAN trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KASPI B/V (LOCKA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KASPI B/V (OVLET trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KASPI B/V (PUNIT trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KASPI B/V (ZANEY trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "NONUM A (MUSEY FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 21,
                    "Non-Jet": 24
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "NONUM A (NORMA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 24,
                    "Non-Jet": 28
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "NONUM V (MUSEY FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 21,
                    "Non-Jet": 24
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "NONUM V (NORMA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 24,
                    "Non-Jet": 27
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "NONUM W (MUSEY FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 21,
                    "Non-Jet": 23
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "NONUM W (NORMA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 24,
                    "Non-Jet": 27
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "UPOLO A (BARIA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "UPOLO V (BARIA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "UPOLO W (BARIA FF) STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
        },
        "33": {
            "HENDO A (ANDOP trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 21,
                    "Non-Jet": 24
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "HENDO A (BARIA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 0
                }
            },
            "HENDO A (ISNER trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 12,
                    "Non-Jet": 14
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "HENDO A (NORMA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "HENDO A (OVLET trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 22,
                    "Non-Jet": 25
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "HENDO A (PUNIT trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 20,
                    "Non-Jet": 23
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "HENDO A (VEKBI trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 24,
                    "Non-Jet": 27
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI A (AVDAN trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 23,
                    "Non-Jet": 26
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI A (LOCKA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 22,
                    "Non-Jet": 26
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI A (ZANEY trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 22,
                    "Non-Jet": 25
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI V (AVDAN trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI V (LOCKA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 15,
                    "Non-Jet": 17
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI V (OVLET trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 16,
                    "Non-Jet": 18
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI V (ZANEY trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 14,
                    "Non-Jet": 16
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI X (AVDAN trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 18,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI X (LOCKA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 20
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI X (OVLET trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 19,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "KEEWI X (ZANEY trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 17,
                    "Non-Jet": 19
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TOTTY W (ANDOP trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 19,
                    "Non-Jet": 22
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TOTTY W (ISNER trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TOTTY W (NORMA trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 13,
                    "Non-Jet": 15
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TOTTY W (PUNIT trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 19,
                    "Non-Jet": 21
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
            "TOTTY W (VEKBI trans) STAR": {
                "aircraft": {
                    "Jet & DH8D": 22,
                    "Non-Jet": 25
                },
                "corrections": {
                    "Reduced Speed": 1
                }
            },
        }
    }
};