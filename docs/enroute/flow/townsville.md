---
  title: Townsville Flow
---

--8<-- "includes/abbreviations.md"

<!--
| Name                                      | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Townsville Flow :octicons-checklist-24:** | TLF     |                         |             | TL_FMP        |

!!! abstract "Flow Positions"
    :octicons-checklist-24: There are special restrictions for controllers logging on as TLF. **KEN** must be staffed, and controllers intending to open TLF must coordinate with them *before* logging on. -->
	
## Local Knowledge
- Aircraft may be assigned the Papa STAR to reduce track miles
- During VMC by day, aircraft may be instructed to track for a visual base to either runway
- With RWY 01 in use, small non-jet aircraft may be processed to RWY 07 via either a VSA or RNP

## Flow Tables
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"
    | STAR         | RWY 01 | RWY 19 |
    | ------------ | :----: | :----: |
    | **IBUXI A**  | 16     | -      |
    | **IBUXI Z**  | -      | 11^    |
    | **IGIKI A**<br>*Feeder Fix: 36 DME TL*  | <br>14    | <br>-     |
    | **POROB A**  | 13     | -      |
    | **POROB B**  | -      | 13     |
    | **POROB P**  | 11^    | 11^    |
    | **POROB Z**  | -      | 13     |
    | **VOMPA A**  | 10^    | -      |
    | **VOMPA B**  | -      | 15     |
    | **VOMPA P**  | 10^    | 13     |
    | **VOMPA Z**  | -      | 15     |

=== "Non-Jets"
    | STAR         | RWY 01 | RWY 19 |
    | ------------ | :----: | :----: |
    | **IBUXI A**  | 19     | -      |
    | **IBUXI Z**  | -      | 12^    |
    | **IGIKI A**<br>*Feeder Fix: 36 DME TL*  | <br>16     | <br>-     |
    | **POROB A**  | 14     | -      |
    | **POROB B**  | -      | 15     |
    | **POROB P**  | 12^    | 13^    |
    | **POROB Z**  | -      | 14     |
    | **VOMPA A**  | 11^    | -      |
    | **VOMPA B**  | -      | 17     |
    | **VOMPA P**  | 11^    | 15     |
    | **VOMPA Z**  | -      | 16     |

### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

### Assumptions
- Nil wind
- The feeder fix for all STARs is the waypoint coinciding with the title of the STAR, except:
    - The feeder fix for the IGIKI STAR is 36 DME TL (where it intersects with the STAR track)

## Calculator
<script type="module" src="../../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YBTL"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YBTL"></div>