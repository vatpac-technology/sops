---
  title: Pearce TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login ID              |
| ------------------ | --------------| -------------- | ---------------- |
| **Pearce Approach**    | **Pearce Approach**  | **130.200** | **PE_APP**       |

## Airspace
The PE TCU is responsible for the airspace within **20 TACAN** of PEA (that is continained within **Pearce SUA**), `SFC` to `A050`. By default, PE TCU does not border any HYD CTA.

This is all reclassified to **Class C** when PE TCU is online.

!!! abstract "Reference"
    A helpful diagram can be found in [Pearce FIHA AD2 Supp](https://ais-af.airforce.gov.au/australian-aip){target=new}, Section 2.2.2.

### Additional Releases
Additional airspace releases may be NOTAM'd, or coordinated between PE TCU, PH TCU and HYD, to facilitate Military Operations.

!!! phraseology
    <span class="hotline">**PE TCU** -> **PH TCU**</span>: "Request release of R155 Alpha and Bravo, SFC to F180, for Military Operations. My onwards with HYD"   
    <span class="hotline">**PH TCU** -> **PE TCU**</span>: "R155 Alpha and Bravo, SFC to F180, Released to you. Your onwards with HYD"  

    <span class="hotline">**PE TCU** -> **HYD**</span>: "Request release of R155 Alpha and Bravo, SFC to F180, for Military Operations. My onwards with PH TCU"   
    <span class="hotline">**HYD** -> **PE TCU**</span>: "R155 Alpha and Bravo, SFC to F180, Released to you. Your onwards with PH TCU"  

## Coordination
### HYD
#### Departures
Voiceless for all aircraft:
 
- Tracking via **AVNEX**; and  
- Assigned the lower of `F180` or the `RFL`

All other aircraft going to HYD CTA must be **Heads-up** Coordinated by PE TCU, if coming from CTA (ie, only if PE TCU has assumed more airspace than the default setup).

#### Arrivals/Overfliers
If PE TCU has assumed additional airspace from the default, and as such, PE TCU CTA borders HYD CTA, then:

Voiceless for all aircraft:

- Tracking from **JULIM** or **SAPKO** DCT **PEA**; and 
- Assigned `A090`

All other arrivals/overfliers coming from HYD CTA will be **Heads-up** Coordinated to PE TCU prior to **20nm** from the boundary.

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}