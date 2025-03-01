---
  title: Pearce TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | --------------| -------------- | ---------------- |
| **Pearce Approach**    | **Pearce Approach**  | **130.200** | **PE_APP**       |

## Airspace
The PE TCU is responsible for the airspace within **20 TACAN** of PEA (that is continained within **Pearce SUA**), `SFC` to `A050`. By default, PE TCU does not border any PIY CTA.

This is all reclassified to **Class C** when PE TCU is online.

!!! abstract "Reference"
    A helpful diagram can be found in [Pearce FIHA AD2 Supp](https://ais-af.airforce.gov.au/australian-aip){target=new}, Section 2.2.2.

### Additional Releases
Additional airspace releases may be NOTAM'd, or coordinated between PE TCU, PH TCU and PIY, to facilitate Military Operations.

!!! phraseology
    <span class="hotline">**PE TCU** -> **PH TCU**</span>: "Request release of R155 Alpha and Bravo, SFC to F180, for Military Operations. My onwards with PIY"   
    <span class="hotline">**PH TCU** -> **PE TCU**</span>: "R155 Alpha and Bravo, SFC to F180, Released to you. Your onwards with PIY"  

    <span class="hotline">**PE TCU** -> **PIY**</span>: "Request release of R155 Alpha and Bravo, SFC to F180, for Military Operations. My onwards with PH TCU"   
    <span class="hotline">**PIY** -> **PE TCU**</span>: "R155 Alpha and Bravo, SFC to F180, Released to you. Your onwards with PH TCU"  

## Coordination
### PIY
#### Departures
Voiceless for all aircraft:
 
- Tracking via **AVNEX**; and  
- Assigned the lower of `F180` or the `RFL`

All other aircraft going to PIY CTA must be **Heads-up** Coordinated by PE TCU, if coming from CTA (ie, only if PE TCU has assumed more airspace than the default setup).

#### Arrivals/Overfliers
If PE TCU has assumed additional airspace from the default, and as such, PE TCU CTA borders PIY CTA, then:

Voiceless for all aircraft:

- Tracking from **JULIM** or **SAPKO** DCT **PEA**; and 
- Assigned `A090`

All other arrivals/overfliers coming from HYD CTA will be **Heads-up** Coordinated to PE TCU prior to **20nm** from the boundary.

### PH TCU
**All aircraft** transiting between PE TCU and PH TCU must be heads-up coordinated prior to the boundary.

!!! phraseology
    <span class="hotline">**PE TCU** -> **PH TCU**</span>: "Airborne YPEA, PHNX11"   
    <span class="hotline">**PH TCU** -> **PE TCU**</span>: "PHNX11, F180"  

### PE ADC
[Next](../controller-skills/coordination.md#next) coordination is required from PE ADC to PE TCU for all aircraft.

The Standard Assignable Level from **PE ADC** to **PE TCU** is:

| Departure Procedure | Level |
| ------------------- | ----- |
| **GUNOK** SID | `A030` |
| A **Procedural** SID | `F130` |
| All others | The lower of `F130` and `RFL` |

### GIG ADC
[Next](../controller-skills/coordination.md#next) coordination is required from GIG ADC to PE TCU for all aircraft.

The Standard Assignable Level from **GIG ADC** to **PE TCU** is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `A050` and `RFL` |

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}