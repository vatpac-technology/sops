---
  title: Darwin TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Darwin Approach East**    |**DAE**| **Darwin Approach**  | **125.200**         | **DN_APP**          |
| Darwin Approach West†   |DAW| Darwin Approach   | 134.100         | DN-W_APP                                  |
| **Darwin ADC**    | | **Darwin Tower**  | **133.100**         | **DN_TWR**        |
| **Darwin SMC**   ||  **Darwin Ground**  | **121.800**         | **DN_GND**        |
| **Darwin ACD**    | | **Darwin Delivery**  | **126.800**         | **DN_DEL**       |
| Darwin ATIS    |   | | 128.250         | YPDN_ATIS       |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies){target=new}
## Airspace
### TCU

DN TCU owns the airspace within a 40NM radius of the DN DME from `SFC`–`FL180`  

DN TCU is also responsible for Active Restricted Area R264 A-K and R230 A-F  

DAW may request DN TCU (`SFC`–`FL240`) from TRT to facilitate military transits to/from R264 A-K and R230 A-F  

When both DN TCU positions are opened, DN TCU is split east and west along the runway 18/36 extended centreline. DAW owns the airspace to the west of the line and DAE owns the airspace to the east of the line  

<figure markdown>
![Default DN TCU Upper Limits](img/dntcu.png){ width="700" }
  <figcaption>DN TCU Airspace</figcaption>
</figure>

### ADC

ADC owns the airspace within the DN CTR (`SFC`–`A010`). This airspace is designed to facilitate the processing of helicopter scenic flights and low-level helicopter circuits.  
The CTR extends 7NM from the thresholds of runways 11 and 29 but does not including the Robertson Barracks transit zone.  

ADC may request DN TCU (`SFC`–`A020`) from DAW to facilitate fixed-wing circuit operations:  
a) Fixed-wing circuit operations are typically conducted at Delissaville (YDLV) due to high traffic density at Darwin  
b) ADC may deny requests for circuits if IFR traffic may be unduly delayed  

<figure markdown>
![WLM ADC Airspace](img/dnadc.png){ width="700" }
  <figcaption>DN ADC Airspace</figcaption>
</figure>

### Surveillance
DN ADC is permitted to use Surveillance standards for separation. Surveillance coverage can be expected to be available at all levels in the DN ADC airspace.  
For simulation purposes, visual separation is assumed to exist below the cloud base, and within 7nm of the aerodrome. Visual separation can still be used to separate from aircraft on an instrument approach, below the cloud base.

## Aerodrome
### Standard Taxi Routes
Aircraft transiting to or from the Southern and Northern GA should follow the following standardised taxi routes:  
a) Outbound via V1  
b) Inbound via Y1  

Traffic permitting, aircraft above 136,000kg MTOW shall be entered/exited for RWY 11/29 from taxiways B2, C3, D or E2 and backtracked as required.  

Taxiway V has a passing bay, located adjacent to the ARFF section. The passing bay is the preferred location for engine run-ups, no longer than 3 minutes  

### Runway Modes

Runway selection shall be coordinated with DAW. In any case, a change of runway mode shall not be broadcast on the ATIS until DAW accepts the change.  
Darwin utilises Land and Hold Short Operations (LAHSO) to achieve an expeditious flow of traffic.

If conditions are suitable, LAHSO runway configurations are preferred:

a) Runway 29 and Runway 36 (LAHSO);  
b) Runway 29 and Runway 18 (LAHSO);  
c) Runway 29 only;  
d) Runway 11 and Runway 36 (LAHSO);  
e) Runway 11 and Runway 18;  
f) Runway 11 only.  
 
### Departures
#### IFR Level Assignment

Issue `F180` or `RFL`; whichever is lower, to aircraft cleared via an RNAV SID or aircraft with a MTOW of 25000kg or more  
Issue `F180` or `RFL`; whichever is lower, to jet aircraft not cleared via an RNAV SID regardless of MTOW  
Issue `A030` or `RFL`; whichever is lower, to aircraft not cleared via an RNAV SID with a MTOW of less than 25000kg  


#### VFR Departures
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


#### Auto-Release Wedge

The Darwin auto-release wedges extend from the departure end runway threshold, 30 degrees splayed from the centreline, to 7nm  

Auto-release at Darwin is only available for VFR aircraft and low-level IFR aircraft that conform with the TMP  

Tower may depart aircraft that conform with the above conditions within the auto-release wedge using the following headings:

|Departure Type| Runway 11| Runway 29|
|---|---|----|
|VFR |H070V, H106V or H140V| H260V, H286V or H320V|
|IFR (Visual Dep)| H070V, H106V, or H140V |H260V, H286V or H320V|
|IFR (Radar)| H070, H106 or H140 |H260, H286 or H320|

!!! tip
    Tower shall provide visual separation between aircraft in the auto-release wedge and subsequent departures until the preceding departure has been maneuvered by TCU

#### Non-RNAV Departures
For non-RNAV approved IFR aircraft with a MTOW of 25000kg or more, issue a Radar SID  
For non-RNAV approved IFR aircraft with a MTOW of less than 25000kg, issue a visual departure or Radar SID  
## Coordination
### DN TCU / ENR
#### Departures
Voiceless coordination is in place from DN TCU to TRT for aircraft:  
Planned at or above `F180`: `Assigned F180`  
Planned below `F180`: `Assigned the RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**DN TCU** -> **TRT**</span>: "PFY1234, with your concurrence, will be assigned F160, for my separation with JTE654"  
    <span class="hotline">**TRT** -> **DN TCU**</span>: "PFY1234, concur F160"  

#### Arrivals
The Standard assignable level from TRT to DN TCU is `A100`, and assigned a STAR. All other aircraft must be prior coordinated

### DN TCU / DN ADC
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `F180`.

Any aircraft that don't meet these criteria must be coordinated to DN TCU with a "Next" Call.

"Next" Coordination is a procedure where the **DN ADC** controller gives a heads-up to the DN TCU controller about an impending departure. The DN TCU controller will respond by assigning a heading to the aircraft, for the **DN ADC** controller to pass on with their takeoff clearance.


!!! example
    <span class="hotline">**DN ADC** -> **DN TCU**</span>: "Next, ABC, runway 11"  
    <span class="hotline">**DN TCU** -> **DN ADC**</span>: "ABC, Track Extended Centreline, unrestricted"  
    <span class="hotline">**DN ADC** -> **DN TCU**</span>: "Track Extended Centreline, unrestricted, ABC"  


All other aircraft, including high level IFR and all departures from 18/36 require departure coordination with **DN TCU**

### DN TCU Internal

All aircraft transiting between internal DN TCU boundaries must be heads-up coordinated.

!!! example
    <span class="hotline">**DAW** -> **DAE**</span>: "via DN, CFH23"  
    <span class="hotline">**DAE** -> **DAW**</span>: "CFH23, A090"   

## Miscellaneous
### Circuit Operations
VFR aircraft that will operate only in ADCs airspace shall be assigned SSR code 0100  

Circuit altitude will depend on the type of aircraft. Assign circuit altitudes for the following aircraft types:  
a) MIL Jet: `A020`  
b) Jet: `A015`  
c) Non-jet: `A010`  
d) Helo: `A010`  
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
Darwin TMA is not responsible for traffic or separation services within the A005 step to the east of Darwin. This step is designed for low-level VFR MIL helos to transit in/out of Robertson Barracks within the need for communication with Darwin TMA.