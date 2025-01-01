---
  title: Moorabbin (YMMB)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login ID                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Moorabbin ADC**  | **Moorabbin Tower**  | **118.100**         | **MB_TWR**                        |
| Moorabbin ADC 2†  | Moorabbin Tower  | 123.000        | MB-2_TWR                        |
| **Moorabbin SMC**   | **Moorabbin Ground**   | **134.250**          | **MB_GND**                       |
| Moorabbin ATIS        |                | 120.900          | YMMB_ATIS                               |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

### Dual ADC Operations
When Moorabbin ADC 2 is online, responsibility for the **Runway**, **Circuit**, and **Airspace** is divided between the two ADC controllers.

ADC 1 takes responsibility for the East Runway, Circuit and Airspace (Runway **17L/35R** and **13L/31R**).

ADC 2 takes responsibility for the West Runway, Circuit and Airspace (Runway **17R/35L** and **13R/31L**).

ADC 2 is **not permitted** online when *Single Runway* Operations are in use.

Refer to the [ATIS section](#runway-nomination) for information on ATIS formatting when ADC 2 is online.

## Airspace
MB ADC is responsible for the Class D airspace in the MB CTR `SFC` to `A025`.

<figure markdown>
![MB ADC Airspace](img/mbairspace.png){ width="1000" }
  <figcaption>MB ADC Airspace</figcaption>
</figure>

Refer to [Class D Tower Separation Standards](../../../separation-standards/classd) for more information.

### Dual ADC Operations
Airspace Ownership when ADC 2 is online, is split down the middle of the two active extended centrelines.

## VFR Operations
### Arrivals

| VFR Approach Point | RWY 13  | RWY 17 | RWY 31  | RWY 35 |
| ----------------| --------- | ---------- | --------- | ---------- |
| BTO | Join final 13R | Join base 17R | Join downwind 31L | Join oblique downwind 35L |
| BAW  | Join base 13R | Join base 17R | Join oblique downwind 31L | Join base 35L |
| CARR | Join downwind 13R | Join downwind 17R | Join oblique base 31L | Join final 35L |
| GMH  | Join downwind 13L | Join base 17L | Join oblique base 31R | Join base 35R |
| ACE  | Join base 13L | Join oblique base 17L | Join base 31R | Join oblique downwind 35R |

## Departures into CTA
The overlying Class C airspace extends down to `A025` to the north and `A045` to the south. Aircraft planned into the overlying Class C airspace shall be issued an airways clearance by **MB ADC** and assigned `A050` or `RFL` if lower. These aircraft must be Next coordinated to the relevant TCU controller, who will assess the current traffic picture and provide a release when able. During times of peak TMA traffic, there may be extensive delays for departure and pilots may elect to depart directly into class G. See [Departure Coordination](#departures) for coordination requirements.

## Circuits
Circuits are to be flown at `A010`.

| Runway | Day | Night |
| ------ | ------ | ----|
| 13L     | Left  | Left |
| 13R     | Right | - |
| 31L     | Left  | - |
| 31R     | Right  | Right |
| 17L     | Left  | Left |
| 17R     | Right | - |
| 35L     | Left  | - |
| 35R     | Right  | Right |

## ATIS
### Runway Nomination

| Priority | Runway Mode |
| ------ | ------ |
| =1     | 17L & 17R |
| =1     | 35L & 35R |
| =2     | 13L & 13R |
| =2     | 31L & 31R |
| 3     | Single Runway Operations (13/17/31/35) |
| 4     | Single Runway Operations (04/22) |

When 2 ADC controllers are online, the ATIS shall be formatted: `RWY 13L/17L/31R/35R FOR ARRS AND DEPS EAST, FREQ 118.1. RWY 13R/17R/31L/35L FOR ARRS AND DEPS WEST, FREQ 123.0`

## Coordination
### Departures
Autorelease is not in effect at YMMB and all departures into the overlying Class C airspace require a 'Next' call. They must not be issued a takeoff clearance until a release has been obtained.

The standard assignable level for departures into CTA is `A050` or `RFL` if lower.

!!! phraseology
    <span class="hotline">**MB ADC** -> **MDS**</span>: "Next, SGE"  
    <span class="hotline">**MDS** -> **MB ADC**</span>: "SGE, unrestricted"

Aircraft departing directly into Class C airspace should be instructed to report passing A025 and transferred to the TCU at that point.

!!! phraseology 
    **SGE**: "SGE, A025"  
    **MB ADC**: "SGE, contact Melbourne Departures on 129.4" 

Aircraft who will transit Class G airspace on climb into CTA will be **cleared to leave and re-enter controlled airspace** on climb to their assigned level.

!!! phraseology
    **MB ADC**: "SGE, cleared to leave and re-enter controlled airspace climbing to A050, no reported IFR traffic. Contact Melbourne Departures on 129.4"  
    **SGE**: "Cleared to leave and re-enter controlled airspace climbing to A050, Departures 129.4, SGE"

### Arrivals/Overfliers
ML TCU will heads-up coordinate arrivals/overfliers from Class C to MB ADC.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to MB ADC, unless MB ADC nominates a restriction.  
VFR aircraft will not be coordinated, and will need to receive their airways clearance from MB ADC.

!!! phraseology
    <span class="hotline">**MDS** -> **MB ADC**</span>: "To the west, PLE, for the NDB-A"  
    <span class="hotline">**MB ADC** -> **MDS**</span>: "PLE, NDB-A"

!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. Use other separation methods, such as holding a departure on the ground, if separation is required with these aircraft.

#### ADC 2 Online
When ADC 2 is online, ML TCU may not be familiar with which controller owns what airspace. Best practice is to receive the coordination no matter what, and if it was meant for the other ADC controller, relay the coordination to them internally.

### MB ADC Internal
MB ADC must heads-up coordinate **all aircraft** transiting from one ADC controller to the other.

!!! phraseology
    <span class="hotline">**MB ADC 2** -> **MB ADC**</span>: "via CARR, EWX for an overfly"  
    <span class="hotline">**MB ADC** -> **MB ADC 2**</span>: "EWX, A015"