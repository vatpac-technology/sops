---
  title: Darwin TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login ID              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Darwin Approach East**    |**DAE**| **Darwin Approach**  | **125.200**         | **DN_APP**          |
| <span class="indented">Darwin Approach West :material-information-outline:{ title="Non-standard position"}   |DAW| Darwin Approach   | 134.100         | DN-W_APP                                  |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
### TCU
DN TCU owns the airspace within a 40NM radius of the DN DME from `SFC`–`FL180`.

### Airspace Division
When both DN TCU positions are opened, DN TCU is split east and west along the runway 18/36 extended centreline. DAW owns the airspace to the west of the line and DAE owns the airspace to the east of the line  

<figure markdown>
![Default DN TCU Upper Limits](img/dntcu.png){ width="700" }
  <figcaption>DN TCU Airspace</figcaption>
</figure>

### ADC
ADC owns the airspace within the DN CTR (`SFC`–`A010`). This airspace is designed to facilitate the processing of helicopter scenic flights and low-level helicopter circuits.  
The CTR extends 7NM from the thresholds of runways 11 and 29 but does not including the Robertson Barracks transit zone.  

ADC may request DN TCU (`SFC`–`A020`) from DN TCU to facilitate fixed-wing circuit operations:  
a) Fixed-wing circuit operations are typically conducted at Delissaville (YDLV) due to high traffic density at Darwin  
b) ADC may deny requests for circuits if IFR traffic may be unduly delayed  

<figure markdown>
![DN ADC Airspace](img/dnadc.png){ width="700" }
  <figcaption>DN ADC Airspace</figcaption>
</figure>

## Runway Modes
Runway selection shall be coordinated by DN ADC. In any case, a change of runway mode shall not be broadcast on the ATIS until DAW accepts the change.  

The Runway Mode options available are:

a) Runway 29 and Runway 36;  
b) Runway 29 and Runway 18;  
c) Runway 29 only;  
d) Runway 11 and Runway 36;  
e) Runway 11 and Runway 18;  
f) Runway 11 only.  

## LAHSO
With LAHSO in use, ADC will visually separate all relevant aircraft during their final approach and in the event of a go around. TCU controllers shall ensure that simultaneous arrivals are laterally segregated where possible, so that their flightpaths do not conflict in the event of a go around.

!!! note
    Due to its operational complexity, LAHSO **must be authorised by a member of the VATPAC ATS or Events Staff Team or a C3-rated controller**.

## Charts
!!! abstract "Reference"
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Miscellaneous

### IFR Training Area
IFR aircraft requiring an area for training shall be cleared to operate in the North Eastern Training Area (NETA)  
The NETA is defined as the area between DN 360R–060R from 15NM–30NM DN DME.  
Aircraft are to be cleared to the NETA via the 030R outbound. Vertical limits are to be specified by DAW prior to issuing airways clearance  

### Designated Fuel Dumping Area
Other than in an emergency, the designated fuel jettison area is:  
a) Over water in the Beagle Gulf  
b) Between the 320 and 020 TACAN radials  
c) `A060` or above  

### Robertson Barracks
Darwin TCU is not responsible for traffic or separation services within the A005 step to the east of Darwin. This step is designed for low-level VFR MIL helos to transit in/out of Robertson Barracks without the need for communication with Darwin TCU.

### YPDN VFR Departures
`A020` or the planned level; whichever is lower, to all VFR aircraft.  

VFR aircraft are required to track via one of the published VFR Routes.  

VFR routes shall be assigned based on the destination radial from Darwin.  

Assign VFR routes in accordance with the following radial chart:  

|Outbound Radial |Assigned VFR Route|
|---|---|
|360 – 040 |VFR Route 1|
|041 – 084 |VFR Route 2|
|085 – 124 |VFR Route 3|
|125 – 180 |VFR Route 4|
|181 – 224 |VFR Route 5|
|225 – 359| Direct|

!!! tip
    If a VFR aircraft has not planned via a VFR route as above, use the phraseology: “ABC, cleared amended route VFR route 1, maintain A020, squawk 4512”

## Coordination
### Enroute
#### Departures
Voiceless for all aircraft:

- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F180` or the `RFL`

!!! note
    Aircraft are *not required* to be tracking via the **SID procedure**, simply tracking via any of the terminus waypoints (Regardless of *departure airport* or *assigned SID*) is sufficient to meet the criteria for **voiceless coordination**

All other aircraft going to TRT CTA must be **Heads-up** Coordinated by DN TCU prior to the boundary.

!!! phraseology
    <span class="hotline">**DN TCU** -> **TRT**</span>: "PFY1234, with your concurrence, will be assigned F160, for my separation with JTE654"  
    <span class="hotline">**TRT** -> **DN TCU**</span>: "PFY1234, concur F160"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YPDN**; and  
- Assigned a STAR; and  
- Assigned `A100`

All other aircraft coming from TRT CTA will be **Heads-up** Coordinated to DN TCU.

### ADC
#### Airspace
DN ADC owns the airspace within the DN CTR `SFC`–`A010`.

#### Auto Release
Auto-Release is **not available** at YPDN. All Departures will be coordinated when ready for departure.

!!! phraseology
    <span class="hotline">**DN ADC** -> **DN TCU**</span>: "Next, EOC, runway 18"  
    <span class="hotline">**DN TCU** -> **DN ADC**</span>: "EOC, Track Extended Centreline, unrestricted"  
    <span class="hotline">**DN ADC** -> **DN TCU**</span>: "Track Extended Centreline, EOC"  

The Standard Assignable level from **DN ADC** to **DN TCU** is:

- For IFR aircraft assigned a Procedural SID: the lower of `F180` or the `RFL`.  
- For IFR aircraft **not** assigned a Procedural SID: the lower of `A030` or the `RFL`.  
- For VFR aircraft: the lower of `A020` or the `RFL`.
 
### DN TCU Internal
Heads-up coordination is not required between DAW and DAE for:

- Departures on a Procedural SID and assigned `F180`  
- Arrivals on a STAR assigned `A060`  

All other aircraft must be heads-up coordinated prior to the airspace boundary  

!!! phraseology
    <span class="hotline">**DAW** -> **DAE**</span>: "via DN, CFH23"  
    <span class="hotline">**DAE** -> **DAW**</span>: "CFH23, A090"   