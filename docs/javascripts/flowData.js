/*
    # Notes
    This script stores the data source for the Flow Calculator logic. Only make edits to this script, do not touch the flowControllerLogic.js script.

    # Adding a New Aerodrome
    To add a new aerodrome, add it to the flowData array below. Copy/paste the ### Calculator UI section from a terminal page like Melbourne or Sydney onto the target markdown page and ensure that the flowControllerLogic.js script is referenced correctly. Update the 'data-aerodrome' attribute in the HTML to match the new aerodrome ICAO code.

    The flowData object is structured as follows:

        "<aerodrome ICAO>": {
            "<aircraft title>": {
                "<runway title>": {
                    "<arrival title>": {
                        "<feeder fix title>": {
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
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "WAREN M STAR": {
                    "WAREN": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WENDY P STAR": {
                    "WENDY": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "27": {
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "34": {
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "BOYSE V STAR": {
                    "BOYSE": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "LIZZI V STAR": {
                    "LIZZI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "PORTS STAR": {
                    "PORTS": {
                        "Normal Speed": 7,
                        "Reduced Speed": 7
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                }
            },
            "09": {
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "PORTS STAR": {
                    "PORTS": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "16": {
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WAREN M STAR": {
                    "WAREN": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "WENDY P STAR": {
                    "WENDY": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "27": {
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "34": {
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "BOYSE V STAR": {
                    "BOYSE": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LIZZI V STAR": {
                    "LIZZI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "PORTS STAR": {
                    "PORTS": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "09": {
                "ARBEY STAR": {
                    "ARBEY": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "BOYSE A STAR": {
                    "BOYSE": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "LIZZI A STAR": {
                    "LIZZI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WAREN A/V STAR": {
                    "WAREN": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "PORTS STAR": {
                    "PORTS": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "WENDY A STAR": {
                    "WENDY": {
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
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "07": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "16L": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            },
            "16R": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "34L": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "34R": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            }
        },
        "Non-Jet": {
            "25": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                }
            },
            "07": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            },
            "16L": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                }
            },
            "16R": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            },
            "34L": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                }
            },
            "34R": {
                "BOREE A/P STAR": {
                    "BOREE": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "MEPIL STAR": {
                    "YAKKA": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "MARLN STAR": {
                    "MARLN": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "RIVET STAR": {
                    "RIVET": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "ODALE STAR": {
                    "WELSH": {
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
                "AVBEG STAR": {
                    "AVBEG": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "LEECE A STAR": {
                    "LEECE": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "LEECE Y STAR": {
                    "LEECE": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MANDA A STAR": {
                    "MANDA": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MANDA X STAR": {
                    "MANDA": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "35": {
                "AVBEG STAR": {
                    "AVBEG": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LEECE A STAR": {
                    "LEECE": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LEECE V STAR": {
                    "LEECE": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LEECE W STAR": {
                    "LEECE": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "LEECE Y STAR": {
                    "LEECE": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "POLLI A STAR": {
                    "POLLI": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "POLLI X STAR": {
                    "POLLI": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "17": {
                "AVBEG STAR": {
                    "AVBEG": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "BUNGO A STAR": {
                    "BUNGO": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MANDA A STAR": {
                    "MANDA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "MANDA X STAR": {
                    "MANDA": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "30": {
                "BUNGO V STAR": {
                    "BUNGO": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "35": {
                "AVBEG STAR": {
                    "AVBEG": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "BUNGO A STAR": {
                    "BUNGO": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "BUNGO V STAR": {
                    "BUNGO": {
                        "Normal Speed": 16,
                        "Reduced Speed": 16
                    }
                },
                "BUNGO W STAR": {
                    "BUNGO": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "BUNGO Y STAR": {
                    "BUNGO": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "POLLI A STAR": {
                    "POLLI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "POLLI X STAR": {
                    "POLLI": {
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
                "IPLET A STAR": {
                    "IPLET": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "IPLET V STAR": {
                    "IPLET": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "IPLET W STAR": {
                    "IPLET": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "MORGO A STAR": {
                    "MORGO": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "30": {
                "IPLET A STAR": {
                    "IPLET": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "IPLET V STAR": {
                    "IPLET": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "IPLET W STAR": {
                    "IPLET": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "MORGO A STAR": {
                    "MORGO": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MORGO V STAR": {
                    "MORGO": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORGO W STAR": {
                    "MORGO": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            }
        },
        "Non-Jet": {
            "12": {
                "IPLET A STAR": {
                    "IPLET": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "IPLET V STAR": {
                    "IPLET": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "IPLET W STAR": {
                    "IPLET": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MORGO A STAR": {
                    "MORGO": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            },
            "30": {
                "IPLET A STAR": {
                    "IPLET": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "IPLET V STAR": {
                    "IPLET": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "IPLET W STAR": {
                    "IPLET": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MORGO A STAR": {
                    "MORGO": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "MORGO V STAR": {
                    "MORGO": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MORGO W STAR": {
                    "MORGO": {
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
                "IRSOM MLTNE": {
                    "IRSOM": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "MIMIM MLTNG": {
                    "MIMIM": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LATUM MLTND": {
                    "LATUM": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "32L": {
                "IRSOM NODAS MLTSC": {
                    "IRSOM": {
                        "Normal Speed": 16,
                        "Reduced Speed": 16
                    }
                },
                "MIMIM ELREL MLTSA": {
                    "MIMIM": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "LATUM MLTSB": {
                    "LATUM": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "14R": {
                "IRSOM MLTNE": {
                    "IRSOM": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "MIMIM MLTNG": {
                    "MIMIM": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LATUM MLTND": {
                    "LATUM": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "32L": {
                "IRSOM NODAS MLTSC": {
                    "IRSOM": {
                        "Normal Speed": 18,
                        "Reduced Speed": 18
                    }
                },
                "MIMIM ELREL MLTSA": {
                    "MIMIM": {
                        "Normal Speed": 11,
                        "Reduced Speed": 12
                    }
                },
                "LATUM MLTSB": {
                    "LATUM": {
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
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MORBI V STAR": {
                    "MORBI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SMOKA X STAR": {
                    "SMOKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "WOODY V STAR": {
                    "WOODY": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "01R": {
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "BLAKA X STAR": {
                    "BLAKA": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "GOMOL V STAR": {
                    "GOMOL": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "GOMOL X STAR": {
                    "GOMOL": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SMOKA M STAR": {
                    "SMOKA": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "TEBOT X STAR": {
                    "TEBOT": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "UGTUG X STAR": {
                    "UGTUG": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                }
            },
            "19L": {
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "BLAKA X STAR": {
                    "BLAKA": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "ENLIP X STAR": {
                    "ENLIP": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "GOMOL V STAR": {
                    "GOMOL": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "GOMOL X STAR": {
                    "GOMOL": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "UGTUG X STAR": {
                    "UGTUG": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "19R": {
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "ENLIP X STAR": {
                    "ENLIP": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "ISPON A STAR": {
                    "ENLIP": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "BLAKA": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "GOMOL": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "UGTUG": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "MORBI V STAR": {
                    "MORBI": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SMOKA X STAR": {
                    "SMOKA": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WOODY V STAR": {
                    "WOODY": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            }
        },
        "Non-Jet": {
            "01L": {
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "MORBI V STAR": {
                    "MORBI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "SMOKA X STAR": {
                    "SMOKA": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "WOODY V STAR": {
                    "WOODY": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            },
            "01R": {
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BLAKA X STAR": {
                    "BLAKA": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "GOMOL V STAR": {
                    "GOMOL": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "GOMOL X STAR": {
                    "GOMOL": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "SMOKA M STAR": {
                    "SMOKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "TEBOT X STAR": {
                    "TEBOT": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "UGTUG X STAR": {
                    "UGTUG": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "19L": {
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    }
                },
                "BLAKA X STAR": {
                    "BLAKA": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    }
                },
                "ENLIP X STAR": {
                    "ENLIP": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "GOMOL V STAR": {
                    "GOMOL": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "GOMOL X STAR": {
                    "GOMOL": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "UGTUG X STAR": {
                    "UGTUG": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "19R": {
                "BLAKA A STAR": {
                    "BLAKA": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    }
                },
                "ENLIP A STAR": {
                    "ENLIP": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "ENLIP X STAR": {
                    "ENLIP": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "GOMOL A STAR": {
                    "GOMOL": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    }
                },
                "ISPON A STAR": {
                    "ENLIP": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "BLAKA": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "GOMOL": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "UGTUG": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "MORBI A STAR": {
                    "MORBI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "MORBI V STAR": {
                    "MORBI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "SMOKA A STAR": {
                    "SMOKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SMOKA X STAR": {
                    "SMOKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "TEBOT A STAR": {
                    "TEBOT": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "UGTUG A STAR": {
                    "UGTUG": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "WOODY A STAR": {
                    "WOODY": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "WOODY V STAR": {
                    "WOODY": {
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
                "BERNI A STAR": {
                    "BERNI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "BERNI V STAR": {
                    "BERNI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "BERNI Y STAR": {
                    "BERNI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "LAMSI A STAR": {
                    "LAMSI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "LAMSI Y STAR": {
                    "LAMSI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "BN Y177 IDRIL CG2NC": {
                    "BN": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                }
            },
            "32": {
                "BERNI A STAR": {
                    "BERNI": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "BERNI V STAR": {
                    "BERNI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "LAMSI A STAR": {
                    "LAMSI": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "LAMSI Y STAR": {
                    "LAMSI": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "BN Y177 IDRIL CG2SA": {
                    "BN": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            }
        },
        "Non-Jet": {
            "14": {
                "BERNI A STAR": {
                    "BERNI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "BERNI V STAR": {
                    "BERNI": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "BERNI Y STAR": {
                    "BERNI": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LAMSI A STAR": {
                    "LAMSI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LAMSI Y STAR": {
                    "LAMSI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    }
                },
                "BN Y177 IDRIL CG2NC": {
                    "BN": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                }
            },
            "32": {
                "BERNI A STAR": {
                    "BERNI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "BERNI V STAR": {
                    "BERNI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "LAMSI A STAR": {
                    "LAMSI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "LAMSI Y STAR": {
                    "LAMSI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "BN Y177 IDRIL CG2SA": {
                    "BN": {
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
                "ANUPA A/X STAR": {
                    "SUDAG": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "GATOR A/X STAR": {
                    "GATOR": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "VEGPU A/X STAR": {
                    "VEGPU": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "VEGPU W STAR": {
                    "VEGPU": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "WANGI A/X STAR": {
                    "WANGI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "WANGI W STAR": {
                    "WANGI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "29": {
                "ANUPA A/X STAR": {
                    "SUDAG": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "GATOR A/X STAR": {
                    "GATOR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "VEGPU A/X STAR": {
                    "VEGPU": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "WANGI A/X STAR": {
                    "WANGI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WANGI W STAR": {
                    "WANGI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            }
        },
        "Non-Jet": {
            "11": {
                "ANUPA A/X STAR": {
                    "SUDAG": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "GATOR A/X STAR": {
                    "GATOR": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "VEGPU A/X STAR": {
                    "VEGPU": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "VEGPU W STAR": {
                    "VEGPU": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "WANGI A/X STAR": {
                    "WANGI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "WANGI W STAR": {
                    "WANGI": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "29": {
                "ANUPA A/X STAR": {
                    "SUDAG": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "GATOR A/X STAR": {
                    "GATOR": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "VEGPU A/X STAR": {
                    "VEGPU": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "WANGI A/X STAR": {
                    "WANGI": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "WANGI W STAR": {
                    "WANGI": {
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
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "JULIM A STAR": {
                    "JULIM": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "KABLI A STAR": {
                    "KABLI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "24": {
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "JULIM A STAR": {
                    "JULIM": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "KABLI A STAR": {
                    "KABLI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "03": {
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "JULIM A STAR": {
                    "JULIM": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "JULIM V STAR": {
                    "JULIM": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "JULIM X STAR": {
                    "JULIM": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "KABLI A STAR": {
                    "KABLI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "KABLI V STAR": {
                    "KABLI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "KABLI X STAR": {
                    "KABLI": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SOLUS V STAR": {
                    "SOLUS": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "SOLUS X STAR": {
                    "SOLUS": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            },
            "06": {
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "JULIM A STAR": {
                    "JULIM": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "JULIM V STAR": {
                    "JULIM": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "KABLI A STAR": {
                    "KABLI": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "KABLI V STAR": {
                    "KABLI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "SOLUS V STAR": {
                    "SOLUS": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "DH8D": {
            "21": {
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                }
            },
            "24": {
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            },
            "03": {
                "DAYLR A STAR": {
                    "DAYLR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "DAYLR V STAR": {
                    "DAYLR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "DAYLR X STAR": {
                    "DAYLR": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LAVEX V STAR": {
                    "LAVEX": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "LAVEX X STAR": {
                    "LAVEX": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "SAPKO V STAR": {
                    "SAPKO": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SAPKO X STAR": {
                    "SAPKO": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SOLUS V STAR": {
                    "SOLUS": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "SOLUS X STAR": {
                    "SOLUS": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            },
            "06": {
                "DAYLR A STAR": {
                    "DAYLR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "DAYLR V STAR": {
                    "DAYLR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAVEX V STAR": {
                    "LAVEX": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "SAPKO V STAR": {
                    "SAPKO": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "SOLUS V STAR": {
                    "SOLUS": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            }
        },
        "Non-Jet": {
            "21": {
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "24": {
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    }
                }
            },
            "03": {
                "DAYLR A STAR": {
                    "DAYLR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "DAYLR V STAR": {
                    "DAYLR": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "DAYLR X STAR": {
                    "DAYLR": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "LAVEX V STAR": {
                    "LAVEX": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LAVEX X STAR": {
                    "LAVEX": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "SAPKO V STAR": {
                    "SAPKO": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "SAPKO X STAR": {
                    "SAPKO": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "SOLUS V STAR": {
                    "SOLUS": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "SOLUS X STAR": {
                    "SOLUS": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                }
            },
            "06": {
                "DAYLR A STAR": {
                    "DAYLR": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "DAYLR V STAR": {
                    "DAYLR": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "IPMOR A STAR": {
                    "KAGMI": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "LAVEX A STAR": {
                    "LAVEX": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    }
                },
                "LAVEX V STAR": {
                    "LAVEX": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "SAPKO A STAR": {
                    "SAPKO": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    }
                },
                "SAPKO V STAR": {
                    "SAPKO": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "SOLUS A STAR": {
                    "SOLUS": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "SOLUS V STAR": {
                    "SOLUS": {
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
                "CODIE A STAR": {
                    "ANDOP": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "AVDAN": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "LOCKA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "OVLET": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "PUNIT": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "ZANEY": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KASPI B/V STAR": {
                    "ANDOP": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "AVDAN": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "LOCKA": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "OVLET": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "PUNIT": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "ZANEY": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    }
                },
                "NONUM A STAR": {
                    "MUSEY": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "NORMA": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    }
                },
                "NONUM V STAR": {
                    "MUSEY": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "NORMA": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    }
                },
                "NONUM W STAR": {
                    "MUSEY": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "NORMA": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    }
                },
                "UPOLO A STAR": {
                    "BARIA": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "UPOLO V STAR": {
                    "BARIA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "UPOLO W STAR": {
                    "BARIA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "33": {
                "HENDO A STAR": {
                    "ANDOP": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "BARIA": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    },
                    "ISNER": {
                        "Normal Speed": 12,
                        "Reduced Speed": 13
                    },
                    "NORMA": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "OVLET": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "PUNIT": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "VEKBI": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    }
                },
                "KEEWI A STAR": {
                    "AVDAN": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "LOCKA": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "ZANEY": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    }
                },
                "KEEWI V STAR": {
                    "AVDAN": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "LOCKA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "OVLET": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "ZANEY": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "KEEWI X STAR": {
                    "AVDAN": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "LOCKA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "OVLET": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "ZANEY": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "TOTTY W STAR": {
                    "ANDOP": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "ISNER": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "NORMA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    },
                    "PUNIT": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    },
                    "VEKBI": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    }
                }
            }
        },
        "Non-Jet": {
            "15": {
                "CODIE A STAR": {
                    "ANDOP": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "AVDAN": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "LOCKA": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "OVLET": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "PUNIT": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    },
                    "ZANEY": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "KASPI B/V STAR": {
                    "ANDOP": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "AVDAN": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "LOCKA": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "OVLET": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "PUNIT": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "ZANEY": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "NONUM A STAR": {
                    "MUSEY": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    },
                    "NORMA": {
                        "Normal Speed": 28,
                        "Reduced Speed": 29
                    }
                },
                "NONUM V STAR": {
                    "MUSEY": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    },
                    "NORMA": {
                        "Normal Speed": 27,
                        "Reduced Speed": 28
                    }
                },
                "NONUM W STAR": {
                    "MUSEY": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "NORMA": {
                        "Normal Speed": 27,
                        "Reduced Speed": 28
                    }
                },
                "UPOLO A STAR": {
                    "BARIA": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "UPOLO V STAR": {
                    "BARIA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "UPOLO W STAR": {
                    "BARIA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                }
            },
            "33": {
                "HENDO A STAR": {
                    "ANDOP": {
                        "Normal Speed": 24,
                        "Reduced Speed": 25
                    },
                    "BARIA": {
                        "Normal Speed": 14,
                        "Reduced Speed": 14
                    },
                    "ISNER": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    },
                    "NORMA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "OVLET": {
                        "Normal Speed": 25,
                        "Reduced Speed": 26
                    },
                    "PUNIT": {
                        "Normal Speed": 23,
                        "Reduced Speed": 24
                    },
                    "VEKBI": {
                        "Normal Speed": 27,
                        "Reduced Speed": 28
                    }
                },
                "KEEWI A STAR": {
                    "AVDAN": {
                        "Normal Speed": 26,
                        "Reduced Speed": 27
                    },
                    "LOCKA": {
                        "Normal Speed": 26,
                        "Reduced Speed": 27
                    },
                    "ZANEY": {
                        "Normal Speed": 25,
                        "Reduced Speed": 26
                    }
                },
                "KEEWI V STAR": {
                    "AVDAN": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "LOCKA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    },
                    "OVLET": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    },
                    "ZANEY": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "KEEWI X STAR": {
                    "AVDAN": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "LOCKA": {
                        "Normal Speed": 20,
                        "Reduced Speed": 21
                    },
                    "OVLET": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "ZANEY": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "TOTTY W STAR": {
                    "ANDOP": {
                        "Normal Speed": 22,
                        "Reduced Speed": 23
                    },
                    "ISNER": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "NORMA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    },
                    "PUNIT": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    },
                    "VEKBI": {
                        "Normal Speed": 25,
                        "Reduced Speed": 26
                    }
                }
            }
        }
    },
    "YBTL": {
        "Jet & DH8D": {
            "19": {
                "IBUXI Z STAR": {
                    "IBUXI": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "POROB B STAR": {
                    "POROB": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "POROB P STAR": {
                    "POROB": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "POROB Z STAR": {
                    "POROB": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "VOMPA B STAR": {
                    "VOMPA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "VOMPA P STAR": {
                    "VOMPA": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "VOMPA Z STAR": {
                    "VOMPA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                }
            },
            "01": {
                "IBUXI A STAR": {
                    "IBUXI": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "IGIKI A STAR": {
                    "36 DME TL": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "POROB A STAR": {
                    "POROB": {
                        "Normal Speed": 13,
                        "Reduced Speed": 14
                    }
                },
                "POROB P STAR": {
                    "POROB": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "VOMPA A STAR": {
                    "VOMPA": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "VOMPA P STAR": {
                    "VOMPA": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            }
        },
        "Non-Jet": {
            "19": {
                "IBUXI Z STAR": {
                    "IBUXI": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "POROB B STAR": {
                    "POROB": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "POROB P STAR": {
                    "POROB": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "POROB Z STAR": {
                    "POROB": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "VOMPA B STAR": {
                    "VOMPA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "VOMPA P STAR": {
                    "VOMPA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "VOMPA Z STAR": {
                    "VOMPA": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                }
            },
            "01": {
                "IBUXI A STAR": {
                    "IBUXI": {
                        "Normal Speed": 19,
                        "Reduced Speed": 20
                    }
                },
                "IGIKI A STAR": {
                    "36 DME TL": {
                        "Normal Speed": 16,
                        "Reduced Speed": 17
                    }
                },
                "POROB A STAR": {
                    "POROB": {
                        "Normal Speed": 14,
                        "Reduced Speed": 15
                    }
                },
                "POROB P STAR": {
                    "POROB": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "VOMPA A STAR": {
                    "VOMPA": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "VOMPA P STAR": {
                    "VOMPA": {
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
                "ASUVA STAR": {
                    "ASUVA": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "EKIPU STAR": {
                    "EKIPU": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "LAXUM A STAR": {
                    "LAXUM": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "LAXUM B STAR": {
                    "LAXUM": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "LAXUM R STAR": {
                    "LAXUM": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "LAXUM V STAR": {
                    "LAXUM": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "OVLUX STAR": {
                    "OVLUX": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "PUDUT STAR": {
                    "PUDUT": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                }
            },
            "30": {
                "ASUVA STAR": {
                    "ASUVA": {
                        "Normal Speed": 7,
                        "Reduced Speed": 7
                    }
                },
                "EKIPU STAR": {
                    "EKIPU": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "IVTAG R/V STAR": {
                    "EKIPU": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    },
                    "OVLUX": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    },
                    "PUDUT": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "LAXUM A STAR": {
                    "LAXUM": {
                        "Normal Speed": 15,
                        "Reduced Speed": 16
                    }
                },
                "LAXUM B STAR": {
                    "LAXUM": {
                        "Normal Speed": 18,
                        "Reduced Speed": 19
                    }
                },
                "LAXUM R STAR": {
                    "LAXUM": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "LAXUM V STAR": {
                    "LAXUM": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "OVLUX STAR": {
                    "OVLUX": {
                        "Normal Speed": 11,
                        "Reduced Speed": 11
                    }
                },
                "PUDUT STAR": {
                    "PUDUT": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                }
            }
        },
        "Non-Jet": {
            "12": {
                "ASUVA STAR": {
                    "ASUVA": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "EKIPU STAR": {
                    "EKIPU": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "LAXUM A STAR": {
                    "LAXUM": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "LAXUM B STAR": {
                    "LAXUM": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "LAXUM R STAR": {
                    "LAXUM": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "LAXUM V STAR": {
                    "LAXUM": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    }
                },
                "OVLUX STAR": {
                    "OVLUX": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "PUDUT STAR": {
                    "PUDUT": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                }
            },
            "30": {
                "ASUVA STAR": {
                    "ASUVA": {
                        "Normal Speed": 8,
                        "Reduced Speed": 8
                    }
                },
                "EKIPU STAR": {
                    "EKIPU": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "IVTAG R/V STAR": {
                    "EKIPU": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    },
                    "OVLUX": {
                        "Normal Speed": 9,
                        "Reduced Speed": 9
                    },
                    "PUDUT": {
                        "Normal Speed": 10,
                        "Reduced Speed": 10
                    }
                },
                "LAXUM A STAR": {
                    "LAXUM": {
                        "Normal Speed": 17,
                        "Reduced Speed": 18
                    }
                },
                "LAXUM B STAR": {
                    "LAXUM": {
                        "Normal Speed": 21,
                        "Reduced Speed": 22
                    }
                },
                "LAXUM R STAR": {
                    "LAXUM": {
                        "Normal Speed": 12,
                        "Reduced Speed": 12
                    }
                },
                "LAXUM V STAR": {
                    "LAXUM": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "OVLUX STAR": {
                    "OVLUX": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                },
                "PUDUT STAR": {
                    "PUDUT": {
                        "Normal Speed": 13,
                        "Reduced Speed": 13
                    }
                }
            }
        }
    }
};