/*
    Notes:

    This script stores the data source for the Flow Calculator logic. Only make edits to this script, do not touch the flowControllerLogic.js script.

    To add a new aerodrome, add it to the flowData array below. Copy/paste the ### Calculator UI section from a terminal page like Melbourne or Sydney onto the target markdown page and ensure that the flowControllerLogic.js script is referenced correctly. The script will automatically detect the aerodrome and create the form inside the divs.

    The flowData object is structured as follows:

        "<aerodrome name>": {
            "<runway title>": {
                "<arrival name>": {
                    "aircraft": {
                        "<aircraft title>": <feeder fix to runway time in minutes>
                    },
                    "corrections": {
                        "<speed title>": <delay in minutes (positive for extra delay, negative for less delay)>
                    }
                }
*/

export const flowData = {
    "melbourne": {
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
    "sydney": {
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
            "MEPIL STAR": {
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
            "ODALE STAR": {
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
            "MEPIL STAR": {
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
            "ODALE STAR": {
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
            "MEPIL STAR": {
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
            "ODALE STAR": {
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
            "MEPIL STAR": {
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
            "ODALE STAR": {
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
            "MEPIL STAR": {
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
            "ODALE STAR": {
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
            "MEPIL STAR": {
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
            "ODALE STAR": {
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
    "canberra": {
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
    }
};