---
  title: Nowra TCU
---

--8<-- "includes/abbreviations.md"

## Positions
| Name                          | ID      | Callsign                | Frequency   | Login ID      |
| ----------------------------- | ------- | ----------------------- | ----------- | ------------- |
| **Nowra Approach**            | **NWA** | **Nowra Approach**      | **123.500** | **NW_APP**    |

## Airspace
The vertical limits of the Nowra TCU is `SFC` to `F125`. Where traffic levels (primarily preplanned military operations) warrant, NW TCU may request a release of R420F from `F125` to `F300` from WOL, if online.

<figure markdown>
![NW TCU Structure](img/nw_tcu.png){ width="700" }
  <figcaption>NW TCU Structure</figcaption>
</figure>

### Airspace Division
**NWA** owns the airspace contained within:

- R421A (`A015`-`A125`)  
- R421B (`A025`-`A125`)  
- M440A (`NOTAM`)
- M440B (`NOTAM`)
- M441 (`NOTAM`)

<figure markdown>
![NW TCU Restricted Areas](img/nw_restricted_areas.png){ width="952" }
  <figcaption>nw TCU Restricted Areas</figcaption>
</figure>

**NW ADC** owns the Class C airspace in the AMB CTR from `SFC` to `A015`.

## Logon Process
Due to the temporary nature of the airspace, surrounding controllers may not be aware of the lateral or vertical boundaries of the TMA. Therefore, when a controller logs on as Nowra TMA, it is important to announce that R421 is activated from SFC to F125.

## Local Procedures
### Activating R420F
Where it is deemed operationally beneficial to activate R420F, this should be requested from the overlying enroute controller.

!!! phraseology
    <span class="hotline">**NWA** -> **WOL**</span>: "There's a preplanned military exercise about to commence, request release of R420F up to F300"  
    <span class="hotline">**WOL** -> **NWA**</span>: "R420F released to you F125 to F300"  
    <span class="hotline">**NWA** -> **WOL**</span>: "R420F released F125 to F300"   

As per [Coordination](#enroute), with R420F active, all transiting aircraft will be coordinated by WOL. Where possible, facilitate the transit of these aircraft. In exceptional circumstances where the level of military aircraft movements prohibit transiting civil aircraft, inform WOL that no transiting aircraft can be accommodated, and that they will need to be rerouted to remain clear of the TCU.

!!! warning "Important"
    Activating R420F increases the workload of the overlying enroute controller by altering the airspace normally available to them for civil aircraft. Only activate this airspace if operationally necessary, primarily for preplanned military exercises.

### VFR Lane of Entry
A lane of entry exists allowing VFR aircraft to transit the TMA in a north-south orientiation. A clearance is required to operate along the lane. Where the adjacent M440A/B airspace is activated, alternate tracking is required to remain clear. Aircraft should generally be cleared along the lane at an altitude not exceeding `A020`.

<figure markdown>
![VFR Lane of Entry](img/nwvfc.png){ width="700" }
<figcaption>VFR Lane of Entry</figcaption>
</figure>

## Coordination
### Enroute
#### Departures
Voiceless for aircraft:
 
- Tracking via a published airway; and  
- Assigned the lower of `F120` or the `RFL`

All other aircraft going to WOL CTA must be **Heads-up** Coordinated by NW TCU prior to the boundary. 

#### Arrivals
Voiceless for aircraft:

- With ADES **YSNW**; and   
- Tracking direct to the NWA TACAN or YSNW; and  
- Assigned `F130`

All other aircraft coming from WOL CTA will be **Heads-up** Coordinated to NW TCU.

### NW ADC
#### Airspace
NW ADC owns the Class C airspace from `SFC` to `A020`, within a 5nm radius of the NWA TACAN. This airspace is designed to facilitate helicopter and circuit traffic.

#### Auto Release
[Next](../controller-skills/coordination.md#next) coordination is required from NW ADC to NW TCU for all aircraft.

The Standard Assignable level from **NW ADC** to **NW TCU** is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `F120` and `RFL` | 

!!! phraseology
    <span class="hotline">**NW ADC** -> **NWA**</span>: "Next, BUCK03, runway 08"  
    <span class="hotline">**NWA** -> **NW ADC**</span>: "BUCK03, Assigned Heading Left 030, unrestricted"  
    <span class="hotline">**NW ADC** -> **NWA**</span>: "Assigned Heading Heading Left 030, BUCK03"

Helicopters departing from helicopter spots will be treated as if departing from the duty runway.

### SY TCU
All aircraft transiting between SY TCU and NW TCU require [Heads-up](../controller-skills/coordination.md#heads-up) coordination prior to the boundary; however, as soon as practical (when is the aircraft becomes airborne) is preferred. 

## Charts
Aerodrome and instrument approach charts are available in the AIP, or otherwise in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}.
