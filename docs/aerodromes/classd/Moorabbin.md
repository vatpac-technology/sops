---
  title: Moorabbin (YMMB)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign             | Frequency   | Login ID     |
|--------------------|----------------------|-------------|--------------|
| **Moorabbin ADC**  | **Moorabbin Tower**  | **118.100** | **MB_TWR**   |
| **Moorabbin SMC**  | **Moorabbin Ground** | **134.250** | **MB_GND**   |
| Moorabbin ATIS     |                      | 120.900     | YMMB_ATIS    |

## Airspace
MB ADC is responsible for the Class D airspace in the MB CTR from `SFC` to `A025`.

<figure markdown>
![MB ADC Airspace](img/mbairspace.png){ width="1000" }
  <figcaption>MB ADC Airspace</figcaption>
</figure>

Refer to [Class D Tower Separation Standards](../../../separation-standards/classd) for more information.

## Runway Modes

Preferred runway modes are as follows (in order of preference):

1. Runway 35L/35R
2. Runway 17L/17R
3. Runways 13/31 (equal preference)

Runway 04/22 is not nominated by default and is only available on request or when operationally required for emergencies. Requests for Runway 22 may be granted if traffic conditions allow. Runway 04 is less likely to be approved due the need to vacate onto an intersecting runway.

## VFR Inbound Procedures

Aircraft should report at the standard VFR entry points:
- **BTO** (to the north)
- **BAW** (to the west)
- **CARR** (to the southwest)
- **GMH** (to the southeast)
- **ACE** (to the northeast)
- **SHOAL** (to the southwest)

| Entry Point | RWY 13 | RWY 17 | RWY 31 | RWY 35 |
|-------------|--------|--------|--------|--------|
| BTO         | Join final 13R | Join base 17R | Join downwind 31L | Join oblique downwind 35L |
| BAW         | Join base 13R  | Join base 17R | Join oblique downwind 31L | Join base 35L |
| CARR        | Join downwind 13R | Join downwind 17R | Join oblique base 31L | Join final 35L |
| GMH         | Join downwind 13L | Join base 17L | Join oblique base 31R | Join base 35R |
| ACE         | Join base 13L | Join oblique base 17L | Join base 31R | Join oblique downwind 35R |
| SHOAL       | Join base 13L | Join base 17L | Join base 31R | Join base 35R |

CTR Entry Altitude: `A010`.

## Circuits

### Fixed wing

Circuit altitude: `A010`.

| Runway  | Day Circuit Direction | Night Circuit Direction |
|---------|------------------------|--------------------------|
| 13L     | Left                  | Left                    |
| 13R     | Right                 | N/A                     |
| 31L     | Left                  | N/A                     |
| 31R     | Right                 | Right                   |
| 17L     | Left                  | Left                    |
| 17R     | Right                 | N/A                     |
| 35L     | Left                  | N/A                     |
| 35R     | Right                 | Right                   |

## Helicopters

### Circuits

Circuit altitude: `A070`.

#### Day VFR Circuits
Helicopter circuits are conducted from designated areas based on the active runway:

- **RWY 17/35**: From the **Eastern Grass**, which encompasses all areas east of runway 35R.
- **RWY 13/31**: From the **Western Triangle**, which extends:
    - From TWY A to the boundary fence,
    - Up to the centerline of TWY A4,
    - Then across to the edge of TWY B and runs parallel to TWY B to the boundary fence.

<figure markdown>
![Eastern Grass and Western Triangle](img/mbhelicircuitareas.png){ width="700" }
<figcaption>Eastern Grass and Western Triangle</figcaption>
</figure>

Circuit operations are conducted parallel to the duty runway and inside the fixed-wing circuit.

**Radio Procedure**:

- Helicopters established on the eastern grass or western triangle are not required clearance for low-level operations below `A001`.
- Pilots will report airborne before each circuit, or if departing additionally they will include their intentions. Aircraft are expected to remain under `A001` until you acknowledge. 
- Controllers will only be provided traffic information on initial circuits. ADC is not expected to positively control these take off or landings, or provide sequencing instructions.
- Acknowledge the aircraft's callsign or provide additional departure instructions. Hold the aircraft if they will conflict with other traffic.
- On completion of circuit training, the pilot will nominate their landing HLS during the airborne call and report downwind before transitioning to the arrival procedure.
- Report any additional inbound helicopter circuit traffic to pilots already established on the eastern grass/western triangle or conducting circuits.

!!! tip
    Where traffic permits, helicopters may be instructed to air transit to their designated areas of operations, to expedite their repositioning.

!!! phraseology
    **RJB**: "MB Twr, RJB, at the southern apron, with information november, request circuits"  
    **MB ADC**: "RJB, air transit Eastern Grass, report airborne"  
    **RJB**: "Air transit Eastern Grass, RJB"  

    **RJB**: "MB Twr, RJB, airborne"  
    **MB ADC**: "RJB"

    *RJB, established at the Eastern Grass, becomes airborne for circuits*
    **RJB**: "RJB Airborne"
    **MB ADC**: "RJB"

#### Night Circuits
Night operations must comply with fixed wing operations.

### Departures

Day VFR helicopter departures must remain at or below `A007`. Helicopters must nominate a aiming point, eastern grass, western triangle or HLS on first contact with MB ADC.

- **Aiming Points**:
    - Direct helicopters departing from the **Southern Aiming Point** to hold short of **TWY A**.
    - Direct helicopters departing from the **Northern Aiming Point** to hold short of **TWY G**.

<figure markdown>
![Aiming Locations](img/mbhelidep.png){ width="700" }
<figcaption>Aiming Locations</figcaption>
</figure>

- **Departure Procedures**:
    - Departures should remain clear of duty runways and:
        - **Track**:
            - For **northbound departures**: Track north until clear of the tower.
            - For **southbound departures**: Track south until clear of airport buildings.

!!! phraseology
    VH-RJB, an R44 helicopter, is looking to depart to the north towards essendon VFR. 17L/R is active.
    **RJB** "MB Twr, RJB, At the southern apron, with information N, request upwind departure via 17L aiming point"
    **MB ADC**: "RJB, cleared air transit 17L aiming point, remain east of the tower, report airborne"
    **RJB**: "RJB, Airborne"

    **MB ADC**: "RJB, report established 17L aiming point"
    **RJB**: "RJB"
    **RJB**: "RJB, 17L aiming point, upwind departure to essendon"
    **MB ADC**: "RJB, Cleared upwind departure, runway 17L, not above A007"

!!! tip
    Remember you can have helicopters report at key locations as memory aid.

### Arrivals

- ML TCU will heads-up coordinate arrivals/overfliers from Class C to MB ADC.

- **From the East**:
    - Helicopters arriving from the east should be instructed to fly a close base leg and pass over the duty threshold at **not below `A003`**.
    - For duty runways **13** or **17**, helicopters arriving for the northern or main aprons may be instructed to overfly the duty threshold at **not below `A003`** for a short right circuit.
    - For **circuits**, helicopters arriving may directly join a leg of the circuit.

- **From the West**:
    - For **southerly approaches** full stop: Instruct helicopters to remain clear of duty runways, track east of the tower, and proceed directly to the **Southern HLS** or southern aiming point.
    - For **northerly approaches** full stop: Instruct helicopters to remain clear of duty runways, track east of the tower, and proceed to the northern or main aprons.
    - For **circuits** have the aircraft fly overhead the tower and report. Instruct the aircraft to join a leg of the circuit.

!!! phraseology
    VH-RJB, an R44 helicopter, is looking to join the circuit from the west at Cerberus, with runway 17L/R active.
    **RJB**: "MB Tower, Helicopter R44 RJB, Cerberus, A007, inbound, with november, for circuits"
    **MB ADC**: "RJB, Moorabbin Tower, overfly the tower A007, report overhead the tower"
    **RJB**: "RJB"
    **RJB**: "RJB overhead the tower"
    **MB ADC**: "RJB, join downwind runway 17R"
    **RJB**: "Join downwind runway, 17R"

## Coordination

### Departures

- Autorelease is not in effect. Coordination for "Next" is required required for departures into overlaying Class C. They must not be issued a takeoff clearance until a release has been obtained.
- Standard assignable level: `A050` (or `RFL` if lower).
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

- ML TCU will heads-up coordinate arrivals/overfliers from Class C to MB ADC.
- **IFR arrivals** will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to MB ADC, unless MB ADC nominates a restriction.
- **VFR arrivals** will not be coordinated, and will need to receive their airways clearance from MB ADC.

!!! phraseology
    <span class="hotline">**MDS** -> **MB ADC**</span>: "To the west, PLE, for the NDB-A"
    <span class="hotline">**MB ADC** -> **MDS**</span>: "PLE, NDB-A"

!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. Use other separation methods, such as holding a departure on the ground, if separation is required with these aircraft.