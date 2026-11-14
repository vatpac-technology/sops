---
  title: Canberra Flow
---

--8<-- "includes/abbreviations.md"

| Name                                      | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Canberra Flow :octicons-checklist-24:** | CBF     |                         |             | CB_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as CBF. **SNO (WOL)**, **BLA**, and **GUN** must be staffed, and controllers intending to open CBF must coordinate with them *before* logging on.
	
## Local Knowledge
- By Day VMC, aircraft from the NE can be issued the BUNGO/LEECE Victor STAR to reduce track miles
- In lieu of a STAR, non-jet aircraft may be processed direct to the IAF of the RNP RWY 30 to reduce track miles

## Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets"               
    | STAR    | RWY 17 | RWY 35 |
    | ------- | :------: | :------: |
    | **AVBEG**   | 8^ | 16 |
    | **LEECE A** | 13 | 15 |
    | **LEECE V** | - | 13 |
    | **LEECE W** | - | 14 |
    | **LEECE Y** | 12^ | 13 |
    | **MANDA A** | 12^ | - |
    | **MANDA X** | 11^ | - |
    | **POLLI A** | - | 11^ |
    | **POLLI X** | - | 11^ |

=== "Non-Jets"
    | STAR    | RWY 17 | RWY 30 | RWY 35 |
    | ------- | :------: | :------: | :------: |
    | **AVBEG**   | 9^ | - | 18 |
    | **BUNGO A** | 13^ | - | 17 |
    | **BUNGO V** | - | 12^ | 16^ |
    | **BUNGO W** | - | - | 17 |
    | **BUNGO Y** | - | - | 15 |
    | **MANDA A** | 13^ | - | - |
    | **MANDA X** | 12^ | - | - |
    | **POLLI A** | - | - | 13^ |
    | **POLLI X** | - | - | 12^ |

### Corrections
| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, regardless of transition

## Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YSCB"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YSCB"></div>
