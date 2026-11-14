---
  title: Tasmania Flow
---

--8<-- "includes/abbreviations.md"

<!--
| Name                                      | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Tasmania Flow :octicons-checklist-24:** | HBF     |                         |             | HB_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as HBF. **HUO** must be staffed, and controllers intending to open HBF must coordinate with them *before* logging on. -->
	
## Local Knowledge
- IFR aircraft inbound to **YCBG** must be flowed as if they were arriving at **YMHB**, unless they can accept a visual approach and remain clear of the inbound tracks to YMHB
- IFR aircraft inbound to **YMLT** from the north may be cleared via the DGA/visual approach for a circuit join onto RWY 32L as a form of track shortening

!!! warning "Important"
    Aircraft landing at YMHB will generally require a backtrack to vacate the runway. During busy periods, the following flow rates are recommended to prevent a large number of go arounds.

    | Situation | Flow Rate |
    | --- | --- |
    | Many arrivals | 4 min between each arrival |
    | Many arrivals and departures | 5 min between each arrival |

## Flow Tables
### YMHB
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | STAR | RWY 12 | RWY 30 |
    | ---------- | ---| -- |
    | **IPLET A**      | 12^ | 12^  |
    | **IPLET V**      | 10^ | 10^  |
    | **IPLET W**      | 10^ | 10^  |
    | **MORGO A**      | 12^ | 15  |
    | **MORGO V**      | - | 14  |
    | **MORGO W**      | - | 14  |

=== "Non-Jets"
    | STAR | RWY 12 | RWY 30 |
    | ---------- | ---| -- |
    | **IPLET A**      | 13^ | 13^  |
    | **IPLET V**      | 11^ | 11^  |
    | **IPLET W**      | 11^ | 12^  |
    | **MORGO A**      | 13^ | 17  |
    | **MORGO V**      | - | 16  |
    | **MORGO W**      | - | 16  |

### YMLT
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | Tracking | RWY 14R | RWY 32L |
    | ---------- | ---| -- |
    | **IRSOM LT2NE**        | 11^ | - |
    | **IRSOM NODAS LT2SC**  | - | 16 |
    | **MIMIM LT2NG**        | 15 | - |
    | **MIMIM ELREL LT2SA**  | - | 19  |
    | **LATUM LT2ND**        | 15 | - |
    | **LATUM LT2SB**        | - | 11^  |

=== "Non-Jets"
    | Tracking | RWY 14R | RWY 32L |
    | ---------- | ---| -- |
    | **IRSOM LT2NE**        | 12^ | - |
    | **IRSOM NODAS LT2SC**  | - | 18 |
    | **MIMIM LT2NG**        | 17 | - |
    | **MIMIM ELREL LT2SA**  | - | 21  |
    | **LATUM LT2ND**        | 17 | - |
    | **LATUM LT2SB**        | - | 12^  |

### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR 

## YMHB Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YMHB"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YMHB"></div>

## YMLT Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YMLT"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YMLT"></div>