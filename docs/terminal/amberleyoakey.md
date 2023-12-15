---
  title: Amberley / Oakey TCU
---

--8<-- "includes/abbreviations.md"


--8<-- "includes/abbreviations.md"

## YAMB Positions

| Name               | Callsign       | Frequency        | Login Identifier              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| Amberley TCU   | Amberley Approach   | 126.200        | AM_APP                                   |



## Airspace
### AM TCU
#### Restricted Areas
By Default Amberley owns all of the R625 Restricted Areas, detailed below:

- R625A (`A015`-`A085`)  
- R625B (`A025`-`A085`)  
- R625C (`A045`-`A085`)  
- R625D (`A085`-`F210`)  

### Optional, as required
AM APP can negotiate further airspace releases from surrounding ENR sectors of the following Restricted Areas:

- R650A (`A050`-`A100`)  
- R650B (`A050`-`F600`)  
- R662A (`A050`-`F600`)  
- R662B (`A050`-`F600`)  
- R671A (`F125`-`F245`)  
- R671B (`F240`-`F600`)

!!! note
    When Controlling a Military Aerodrome on VATSIM its important to consider any notams regarding VSOAs as Restricted Airspaces may be activated. [VATPAC Notams](https://vatpac.org/publications/notam){target=new}

#### Diagram

<figure markdown>
![AM TCU Airspace Diagram](img/amtcu.png){ width="952" }
  <figcaption>AM TCU Airspace Diagram</figcaption>
</figure>

### AM ADC
AM ADC owns the Class C airspace in the AM CTR within 10nm of the YAMB ARP from `SFC` to `A015`. 


## YAMB Aerodrome
#### Coded Departures
Visual Departures are commonly requested which are often in the form of a coded departure (e.g. BYRON7 departure), which can be found in the AD2 Sups Page for Amberley. These coded departures provide a corridor with altitude constraints to join the Military Training Areas east of Brisbane avoiding civilian traffic inbound to Brisbane. 

Aircraft will make a visual departure in the circuit direction and fly overhead Amberley to begin tracking for their initial waypoint.

!!! example
    WOLF03 was assiged the BYRON7 departure with their intial clearance. 
    **AM ADC**: "WOLF03, make left turn, reach `F190` by COWIE, cleared for takeoff"  
    **WOLF03**: "Make left turn, reach `F190` by COWIE, cleared for takeoff, WOLF03"  

| Departure | Waypoint | Constraint |
| --------- | ---------| ----------|
| Northern1 | BINUP  | `F190` |
| Central1 | BINUP | `F190` |
| Byron7 | COWIE | `F190` |

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Coordination
### Enroute
#### Departures
Voiceless coordination is in place from AM TCU to INL(All) for aircraft assigned:  
a) The lower `F180` or `RFL` if they are following a PROCEDURAL or RADAR Departure.  
b) `F260` if assigned a visual coded departure.

Any aircraft not meeting the above criteria must be prior coordinated to INL(All).

!!! example
    <span class="hotline">**AM TCU** -> **DOS**</span>: "DRGN02, with your concurrence, will be assigned `F160`, for my separation with BUCK03"  
    <span class="hotline">**DOS** -> **AM TCU**</span>: "DRGN02, concur `F160`"  

#### Arrivals/Overfliers
All aircraft transiting from GOL/DOS/BUR to **AM TCU** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **AMB TCU** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the GOL/DOS/BUR and **AM TCU** controller agree on.

!!! example
    <span class="hotline">**GOL** -> **AMB TCU**</span>: "via HUUGO, PUMA11, will be assigned A090"  
    <span class="hotline">**AMB TCU** -> **GOL**</span>: "PUMA11, A090"  

### AM ADC
#### Auto Release  

'Next' coordination is required from AM ADC to AM TCU for aircraft due to the busy ad-hoc nature of the airspace.

!!! example
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Next, ASY01, runway 33"  
    <span class="hotline">**AM TCU** -> **AM ADC**</span>: "ASY01, Assigned Heading Right 030, unrestricted"  
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Assigned Heading Heading Right 030, ASY01"  

#### Level Assignment
The Standard Assignable level is the lower of `F180` or `RFL` to aircraft departing on a RADAR or PROCEDURAL Sid. 

Aircraft flying via a visual coded departure shall be cleared directly to their transit altitude to the restricted airspace of `F260`.