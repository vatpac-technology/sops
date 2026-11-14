---
  title: Darwin Flow
---

--8<-- "includes/abbreviations.md"

| Name                                      | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Darwin Flow :octicons-checklist-24:**   | DFL     |                         |             | DN_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as DFL. **TRT** must be staffed, and controllers intending to open DFL must coordinate with them *before* logging on.

## Local Knowledge
- Aircraft may be assigned the Whiskey STAR to reduce track miles
- Non-jet aircraft may be assigned runway 18/36 (when suitable) to increase arrival rate
- LAHSO runway mode will increase arrival rate when aircraft of different categories are inbound (see [activation prerequisites](../../terminal/darwin/#lahso) for specific LAHSO approvals required)

## Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | STAR       | RWY 11 | RWY 29 |
    | ---------- | :------: | :------: |
    | **ANUPA A/X**<br>*Feeder Fix: SUDAG*  | <br>12^    | <br>18     |
    | **GATOR A/X**  | 17     | 13     |
    | **VEGPU A/X**  | 13     | 8^     |
    | **VEGPU W**    | 11^    | -      |
    | **WANGI A/X**  | 15     | 17     |
    | **WANGI W**    | 14     | 15     |

=== "Non-Jets"
    | STAR       | RWY 11 | RWY 29 |
    | ---------- | :------: | :------: |
    | **ANUPA A/X**<br>*Feeder Fix: SUDAG*  | <br>13^    | <br>21     |
    | **GATOR A/X**  | 19     | 14     |
    | **VEGPU A/X**  | 15     | 9^     |
    | **VEGPU W**    | 13^    | -      |
    | **WANGI A/X**  | 17     | 19     |
    | **WANGI W**    | 16     | 17     |

### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the ANUPA STAR is **SUDAG**

## Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YPDN"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YPDN"></div>