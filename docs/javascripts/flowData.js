/*
    # Notes
    This script stores the data source for the Flow Calculator logic. Only make edits to this script, do not touch the flowControllerLogic.js script.

    # Adding a New Aerodrome
    To add a new aerodrome, add it to the flowData array below. Copy/paste the ### Calculator UI section from a terminal page like Melbourne or Sydney onto the target markdown page and ensure that the flowControllerLogic.js script is referenced correctly. Update the 'data-aerodrome' attribute in the HTML to match the new aerodrome ICAO code.

    The flowData object is structured as follows:

        "<aerodrome ICAO>": {
            "<aircraft title>": {
                "<runway title>": {
                    "<feeder fix title>": {
                        "<arrival title>": {
                            "<speed title>": <feeder fix to runway time in minutes>
                        }
                    }
                }
            }
        }

    # Limitations
    - Only one calculator of each type (i.e. Landing Time and Feeder Fix Time) can be rendered on each page for a given aerodrome (multiple calculators can be rendered for different aerodromes on the same page)
*/

export const flowData = {
    "YMML": {
        "Jet & DH8D": {
            "16": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "RAZZI M STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "ALAXO P STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "27": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "34": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "BOYSE V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "BOOIN V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "PORTS": {
                    "PORTS STAR": {
                        "Normal Speed": 7,
                        "Reduced Speed": 7
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                }
            },
            "09": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "PORTS": {
                    "PORTS STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "16": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "RAZZI M STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "ALAXO P STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "27": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "34": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "BOYSE V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BOOIN V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "PORTS": {
                    "PORTS STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "09": {
                "ARBEY": {
                    "ARBEY STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "BOYSE": {
                    "BOYSE A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "BOOIN": {
                    "BOOIN A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "RAZZI": {
                    "RAZZI A/V STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "PORTS": {
                    "PORTS STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "ALAXO": {
                    "ALAXO A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            }
        }
    },
    "YSSY": {
        "Jet & DH8D": {
            "25": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "07": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "16L": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            },
            "16R": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "34L": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "34R": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            }
        },
        "Non-Jet": {
            "25": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                }
            },
            "07": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            },
            "16L": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                }
            },
            "16R": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            },
            "34L": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            },
            "34R": {
                "BOREE": {
                    "BOREE A/P STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "YAKKA": {
                    "MEPIL STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "MARLN": {
                    "MARLN STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "RIVET": {
                    "RIVET STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "WELSH": {
                    "ODALE STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                }
            }
        }
    },
    "YSCB": {
        "Jet": {
            "17": {
                "AVBEG": {
                    "AVBEG STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "LEECE": {
                    "LEECE A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "LEECE Y STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MANDA": {
                    "MANDA A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "MANDA X STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "35": {
                "AVBEG": {
                    "AVBEG STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LEECE": {
                    "LEECE A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "LEECE V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "LEECE W STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "LEECE Y STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "POLLI": {
                    "POLLI A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "POLLI X STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "17": {
                "AVBEG": {
                    "AVBEG STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "BUNGO": {
                    "BUNGO A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MANDA": {
                    "MANDA A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "MANDA X STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "30": {
                "BUNGO": {
                    "BUNGO V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "35": {
                "AVBEG": {
                    "AVBEG STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "BUNGO": {
                    "BUNGO A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "BUNGO V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 16
                    },
                    "BUNGO W STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "BUNGO Y STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "POLLI": {
                    "POLLI A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "POLLI X STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            }
        }
    },
    "YMHB": {
        "Jet & DH8D": {
            "12": {
                "IPLET": {
                    "IPLET A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "IPLET V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "IPLET W STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "MORGO": {
                    "MORGO A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "30": {
                "IPLET": {
                    "IPLET A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "IPLET V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "IPLET W STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "MORGO": {
                    "MORGO A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "MORGO V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "MORGO W STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            }
        },
        "Non-Jet": {
            "12": {
                "IPLET": {
                    "IPLET A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "IPLET V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "IPLET W STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MORGO": {
                    "MORGO A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            },
            "30": {
                "IPLET": {
                    "IPLET A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "IPLET V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "IPLET W STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MORGO": {
                    "MORGO A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "MORGO V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "MORGO W STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            }
        }
    },
    "YMLT": {
        "Jet & DH8D": {
            "14R": {
                "IRSOM": {
                    "IRSOM MLTNE": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MIMIM": {
                    "MIMIM MLTNG": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LATUM": {
                    "LATUM MLTND": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "32L": {
                "IRSOM": {
                    "IRSOM NODAS MLTSC": {
                        "Normal Speed": 16,
                        "Reduced Speed": 16
                    }
                },
                "MIMIM": {
                    "MIMIM ELREL MLTSA": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "LATUM": {
                    "LATUM MLTSB": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "14R": {
                "IRSOM": {
                    "IRSOM MLTNE": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MIMIM": {
                    "MIMIM MLTNG": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LATUM": {
                    "LATUM MLTND": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "32L": {
                "IRSOM": {
                    "IRSOM NODAS MLTSC": {
                        "Normal Speed": 18,
                        "Reduced Speed": 18
                    }
                },
                "MIMIM": {
                    "MIMIM ELREL MLTSA": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "LATUM": {
                    "LATUM MLTSB": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            }
        }
    },
    "YBBN": {
        "Jet & DH8D": {
            "01L": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "MORBI V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "SMOKA X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "UGTUG": {
                    "UGTUG A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "WOODY V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "01R": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "BLAKA X STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "GOMOL V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "GOMOL X STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "SMOKA M STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "TEBOT X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "UGTUG": {
                    "UGTUG A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "UGTUG X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                }
            },
            "19L": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "BLAKA X STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "ENLIP X STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "GOMOL V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "GOMOL X STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "UGTUG": {
                    "UGTUG A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "UGTUG X STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "19R": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "ISPON A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "ENLIP X STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "ISPON A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "ISPON A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "UGTUG": {
                    "ISPON A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "UGTUG A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "MORBI V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "SMOKA X STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "WOODY V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            }
        },
        "Non-Jet": {
            "01L": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "MORBI V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "SMOKA X STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "UGTUG": {
                    "UGTUG A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "WOODY V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            },
            "01R": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BLAKA X STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "GOMOL V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "GOMOL X STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "SMOKA M STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "TEBOT X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "UGTUG": {
                    "UGTUG A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "UGTUG X STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "19L": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "BLAKA X STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "ENLIP X STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "GOMOL V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "GOMOL X STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "UGTUG": {
                    "UGTUG A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "UGTUG X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "19R": {
                "BLAKA": {
                    "BLAKA A STAR": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    },
                    "ISPON A STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    }
                },
                "ENLIP": {
                    "ENLIP A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "ENLIP X STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "ISPON A STAR": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    }
                },
                "GOMOL": {
                    "GOMOL A STAR": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "ISPON A STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "UGTUG": {
                    "ISPON A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "UGTUG A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MORBI": {
                    "MORBI A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "MORBI V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "SMOKA": {
                    "SMOKA A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "SMOKA X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "TEBOT": {
                    "TEBOT A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "WOODY": {
                    "WOODY A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "WOODY V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    }
                }
            }
        }
    },
    "YBCG": {
        "Jet & DH8D": {
            "14": {
                "BERNI": {
                    "BERNI A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BERNI V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "BERNI Y STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "LAMSI": {
                    "LAMSI A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "LAMSI Y STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "BN": {
                    "BN Y177 IDRIL CG2NC": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                }
            },
            "32": {
                "BERNI": {
                    "BERNI A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "BERNI V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "LAMSI": {
                    "LAMSI A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "LAMSI Y STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "BN": {
                    "BN Y177 IDRIL CG2SA": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            }
        },
        "Non-Jet": {
            "14": {
                "BERNI": {
                    "BERNI A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "BERNI V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "BERNI Y STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LAMSI": {
                    "LAMSI A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "LAMSI Y STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    }
                },
                "BN": {
                    "BN Y177 IDRIL CG2NC": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                }
            },
            "32": {
                "BERNI": {
                    "BERNI A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "BERNI V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "LAMSI": {
                    "LAMSI A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "LAMSI Y STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "BN": {
                    "BN Y177 IDRIL CG2SA": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            }
        }
    },
    "YPDN": {
        "Jet & DH8D": {
            "11": {
                "SUDAG": {
                    "ANUPA A/X STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "GATOR": {
                    "GATOR A/X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "VEGPU": {
                    "VEGPU A/X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "VEGPU W STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "WANGI": {
                    "WANGI A/X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "WANGI W STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "29": {
                "SUDAG": {
                    "ANUPA A/X STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "GATOR": {
                    "GATOR A/X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "VEGPU": {
                    "VEGPU A/X STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "WANGI": {
                    "WANGI A/X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "WANGI W STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            }
        },
        "Non-Jet": {
            "11": {
                "SUDAG": {
                    "ANUPA A/X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "GATOR": {
                    "GATOR A/X STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "VEGPU": {
                    "VEGPU A/X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "VEGPU W STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "WANGI": {
                    "WANGI A/X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "WANGI W STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "29": {
                "SUDAG": {
                    "ANUPA A/X STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "GATOR": {
                    "GATOR A/X STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "VEGPU": {
                    "VEGPU A/X STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "WANGI": {
                    "WANGI A/X STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "WANGI W STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            }
        }
    },
    "YPPH": {
        "Jet": {
            "21": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "JULIM": {
                    "JULIM A STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "KABLI": {
                    "KABLI A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "24": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "JULIM": {
                    "JULIM A STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "KABLI": {
                    "KABLI A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "03": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "JULIM": {
                    "JULIM A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "JULIM V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "JULIM X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "KABLI": {
                    "KABLI A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "KABLI V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "KABLI X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "SOLUS V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "SOLUS X STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            },
            "06": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "JULIM": {
                    "JULIM A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "JULIM V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "KABLI": {
                    "KABLI A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "KABLI V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "SOLUS V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "DH8D": {
            "21": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "24": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "03": {
                "DAYLR": {
                    "DAYLR A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "DAYLR V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "DAYLR X STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "LAVEX V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "LAVEX X STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "SAPKO V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "SAPKO X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "SOLUS V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "SOLUS X STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            },
            "06": {
                "DAYLR": {
                    "DAYLR A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "DAYLR V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "LAVEX V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "SAPKO V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "SOLUS V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "21": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "24": {
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    }
                }
            },
            "03": {
                "DAYLR": {
                    "DAYLR A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "DAYLR V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "DAYLR X STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "LAVEX V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "LAVEX X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "SAPKO V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "SAPKO X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "SOLUS V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "SOLUS X STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "06": {
                "DAYLR": {
                    "DAYLR A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "DAYLR V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "KAGMI": {
                    "IPMOR A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LAVEX": {
                    "LAVEX A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "LAVEX V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "SAPKO": {
                    "SAPKO A STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "SAPKO V STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "SOLUS": {
                    "SOLUS A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "SOLUS V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            }
        }
    },
    "YBCS": {
        "Jet & DH8D": {
            "15": {
                "ANDOP": {
                    "CODIE A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "AVDAN": {
                    "CODIE A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "LOCKA": {
                    "CODIE A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "OVLET": {
                    "CODIE A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "PUNIT": {
                    "CODIE A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "ZANEY": {
                    "CODIE A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "MUSEY": {
                    "NONUM A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "NONUM V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "NONUM W STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "NORMA": {
                    "NONUM A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "NONUM V STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "NONUM W STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "NONUM": {
                    "NONUM A STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    },
                    "NONUM V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "NONUM W STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "BARIA": {
                    "UPOLO A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "UPOLO V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "UPOLO W STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "33": {
                "ANDOP": {
                    "HENDO A STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "BARIA": {
                    "HENDO A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "ISNER": {
                    "HENDO A STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "NORMA": {
                    "HENDO A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "OVLET": {
                    "HENDO A STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "PUNIT": {
                    "HENDO A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "VEKBI": {
                    "HENDO A STAR": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    }
                },
                "AVDAN": {
                    "KEEWI A STAR": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "LOCKA": {
                    "KEEWI A STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "ZANEY": {
                    "KEEWI A STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            }
        },
        "Non-Jet": {
            "15": {
                "ANDOP": {
                    "CODIE A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "AVDAN": {
                    "CODIE A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LOCKA": {
                    "CODIE A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "OVLET": {
                    "CODIE A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "PUNIT": {
                    "CODIE A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "ZANEY": {
                    "CODIE A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "KASPI B/V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MUSEY": {
                    "NONUM A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "NONUM V STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "NONUM W STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "NORMA": {
                    "NONUM A STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "NONUM V STAR": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "NONUM W STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "NONUM": {
                    "NONUM A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "NONUM V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "NONUM W STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "BARIA": {
                    "UPOLO A STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "UPOLO V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "UPOLO W STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "33": {
                "ANDOP": {
                    "HENDO A STAR": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    }
                },
                "BARIA": {
                    "HENDO A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    }
                },
                "ISNER": {
                    "HENDO A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "NORMA": {
                    "HENDO A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "OVLET": {
                    "HENDO A STAR": {
                        "Normal Speed": 25,
                        "Reduced Speed": 26
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "PUNIT": {
                    "HENDO A STAR": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "VEKBI": {
                    "HENDO A STAR": {
                        "Normal Speed": 27,
                        "Reduced Speed": 28
                    },
                    "TOTTY W STAR": {
                        "Normal Speed": 25,
                        "Reduced Speed": 26
                    }
                },
                "AVDAN": {
                    "KEEWI A STAR": {
                        "Normal Speed": 26,
                        "Reduced Speed": 27
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "LOCKA": {
                    "KEEWI A STAR": {
                        "Normal Speed": 26,
                        "Reduced Speed": 27
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "ZANEY": {
                    "KEEWI A STAR": {
                        "Normal Speed": 25,
                        "Reduced Speed": 26
                    },
                    "KEEWI V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "KEEWI X STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                }
            }
        }
    },
    "YBTL": {
        "Jet & DH8D": {
            "19": {
                "IBUXI": {
                    "IBUXI Z STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "POROB": {
                    "POROB B STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "POROB P STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "POROB Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "VOMPA": {
                    "VOMPA B STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "VOMPA P STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "VOMPA Z STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "01": {
                "IBUXI": {
                    "IBUXI A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "36 DME TL": {
                    "IGIKI A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "POROB": {
                    "POROB A STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "POROB P STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "VOMPA": {
                    "VOMPA A STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "VOMPA P STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            }
        },
        "Non-Jet": {
            "19": {
                "IBUXI": {
                    "IBUXI Z STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "POROB": {
                    "POROB B STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "POROB P STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "POROB Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "VOMPA": {
                    "VOMPA B STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "VOMPA P STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "VOMPA Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "01": {
                "IBUXI": {
                    "IBUXI A STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "36 DME TL": {
                    "IGIKI A STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "POROB": {
                    "POROB A STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "POROB P STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "VOMPA": {
                    "VOMPA A STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "VOMPA P STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        }
    },
    "YWLM": {
        "Jet & DH8D": {
            "12": {
                "ASUVA": {
                    "ASUVA STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "EKIPU": {
                    "EKIPU STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "LAXUM": {
                    "LAXUM A STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    },
                    "LAXUM B STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "LAXUM R STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    },
                    "LAXUM V STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "OVLUX": {
                    "OVLUX STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "PUDUT": {
                    "PUDUT STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                }
            },
            "30": {
                "ASUVA": {
                    "ASUVA STAR": {
                        "Normal Speed": 7,
                        "Reduced Speed": 7
                    }
                },
                "EKIPU": {
                    "EKIPU STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "IVTAG R/V STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "OVLUX": {
                    "IVTAG R/V STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    },
                    "OVLUX STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "PUDUT": {
                    "IVTAG R/V STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    },
                    "PUDUT STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "LAXUM": {
                    "LAXUM A STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "LAXUM B STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "LAXUM R STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "LAXUM V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "12": {
                "ASUVA": {
                    "ASUVA STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "EKIPU": {
                    "EKIPU STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "LAXUM": {
                    "LAXUM A STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "LAXUM B STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "LAXUM R STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    },
                    "LAXUM V STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "OVLUX": {
                    "OVLUX STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "PUDUT": {
                    "PUDUT STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            },
            "30": {
                "ASUVA": {
                    "ASUVA STAR": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "EKIPU": {
                    "EKIPU STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "IVTAG R/V STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "OVLUX": {
                    "IVTAG R/V STAR": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    },
                    "OVLUX STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "PUDUT": {
                    "IVTAG R/V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "PUDUT STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "LAXUM": {
                    "LAXUM A STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "LAXUM B STAR": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "LAXUM R STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "LAXUM V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            }
        }
    },
    "YPAD": {
        "Jet": {
            "23": {
                "ATNAR": {
                    "ATNAR A/Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "ATNAR V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "AGROS": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KLAVA": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "RAYNA Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "RAYNA V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "MARGO": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "DRINA": {
                    "DRINA A/Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "DRINA V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "KAKLU": {
                    "KAKLU A/Z STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "ERITH": {
                    "RAYNA Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "RAYNA V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                }
            },
            "05": {
                "ATNAR": {
                    "ATNAR Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "ATNAR V/W STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "AGROS": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KLAVA": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MARGO": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "INTOG": {
                    "INTOG V/X/Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KAKLU": {
                    "KAKLU Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "KAKLU V/X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            }
        },
        "DH8D": {
            "12": {
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "ATPIP STAR - IAP": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "ELROX": {
                    "ELROX V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "ATNAR": {
                    "GULFS V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "AGROS": {
                    "PAMMY V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MARGO": {
                    "PAMMY V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "KAKLU": {
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "SURGN STAR - IAP": {
                        "Normal Speed": 15,
                        "Reduced Speed": 15
                    }
                },
                "DRINA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "KLAVA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "23": {
                "ATNAR": {
                    "ATNAR A/Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "ATNAR V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "GULFS V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "AGROS": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "KLAVA": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "RAYNA Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "RAYNA V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MARGO": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "DRINA": {
                    "DRINA A/Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "DRINA V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "ELROX": {
                    "ELROX V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "KAKLU": {
                    "KAKLU A/Z STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "ERITH": {
                    "RAYNA Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "RAYNA V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                }
            },
            "30": {
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "ATPIP STAR - IAP": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "KAKLU": {
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "SURGN STAR - IAP": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "AGROS": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "ATNAR": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "DRINA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "ELROX": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KLAVA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "MARGO": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "05": {
                "ATNAR": {
                    "ATNAR Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "ATNAR V/W STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "GULFS V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "INTOG V/X/Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "AGROS": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "KLAVA": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MARGO": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "ELROX": {
                    "ELROX V STAR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "KAKLU": {
                    "KAKLU Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "KAKLU V/X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "DRINA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                }
            }
        },
        "Non-Jet": {
            "12": {
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "ATPIP STAR - IAP": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "ELROX": {
                    "ELROX V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "ATNAR": {
                    "GULFS V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "AGROS": {
                    "PAMMY V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MARGO": {
                    "PAMMY V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "KAKLU": {
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "SURGN STAR - IAP": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "DRINA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    }
                },
                "KLAVA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            },
            "23": {
                "ATNAR": {
                    "ATNAR A/Z STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "ATNAR V STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "GULFS V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "AGROS": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KLAVA": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "RAYNA Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "RAYNA V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MARGO": {
                    "BUGSU A/Z STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "BUGSU V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "DRINA": {
                    "DRINA A/Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "DRINA V STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "ELROX": {
                    "ELROX V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "KAKLU": {
                    "KAKLU A/Z STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "ERITH": {
                    "RAYNA Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "RAYNA V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "30": {
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "ATPIP STAR - IAP": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "KAKLU": {
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "SURGN STAR - IAP": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "AGROS": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "ATNAR": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "DRINA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "ELROX": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "KLAVA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MARGO": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                }
            },
            "05": {
                "ATNAR": {
                    "ATNAR Z STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "ATNAR V/W STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    },
                    "GULFS V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "INTOG": {
                    "ATPIP STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "INTOG V/X STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "INTOG Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "BEVSO": {
                    "BEVSO STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BEVSO STAR - IAP": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "AGROS": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KLAVA": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MARGO": {
                    "BUGSU Z STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "BUGSU V/W STAR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "PAMMY V STAR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    },
                    "No STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "ELROX": {
                    "ELROX V STAR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    },
                    "No STAR - Direct to IAF": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "KAKLU": {
                    "KAKLU Z STAR": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "KAKLU V/X STAR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "SURGN STAR - Circuit Join": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "DRINA": {
                    "No STAR - Circuit Join": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            }
        }
    }
};