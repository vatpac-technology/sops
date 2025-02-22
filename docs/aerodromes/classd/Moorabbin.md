---
  title: Moorabbin (YMMB)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign             | Frequency   | Login ID     |
|--------------------|----------------------|-------------|--------------|
| **Moorabbin ADC**  | **Moorabbin Tower**  | **118.100** | **MB_TWR**   |
| **Moorabbin SMC**  | **Moorabbin Ground** | **134.250** | **MB_GND**   |
| **Moorabbin ATIS**     |                      | **120.900**     | **YMMB_ATIS**    |

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

| Direction from YMMB  | Entry Point |
|-------------|----------------------|
| North | BTO         |
| North East | ACE         |
| East | GMH        |
| South | CARR         |
| South West | SHOL         |
| West | BAW       |

### Circuit Joining Instructions

| Entry Point | RWY 13                          | RWY 17                          | RWY 31                          | RWY 35                          |
|-------------|---------------------------------|----------------------------------|----------------------------------|----------------------------------|
| BTO         | *Final* **13R**                  | *Oblique Base* **17R**            | *Downwind* **31L**                | *Downwind* or *Oblique Downwind* **35L** |
| ACE         | *Base* **13L**                   | *Oblique Base* or *Final* **17L** | *Oblique Downwind* or *Base* **31R** | *Oblique Downwind* **35R**        |
| GMH         | *Oblique Downwind* or *Downwind* **13L** | *Base* **17L**                   | *Oblique Base* or *Final* **31R** | *Base* **35R**                    |
| CARR        | *Oblique Downwind* **13R**       | *Downwind* **17R**                | *Base* *31L**                    | *Final* **35L**                   |
| SHOL       | *Oblique Downwind* or *Base* **13R** | *Oblique Downwind* **17R**       | *Base* **31L**                    | *Oblique Base* or *Final* **35L** |
| BAW         | *Base* or *Oblique Base* **13R** | *Base* or *Oblique Downwind* **17R** | *Oblique Downwind* **31L**         | *Base* **35L**                    |

!!! phraseology
    **EWZ**: "Moorabbin Tower, EWZ, C172, approaching CARR, A015, inbound in receipt of P"  
    **MB ADC**: "EWZ, Moorabbin Tower, join downwind Runway 17R"  
    **EWZ**: "Join downwind Runway 17R, EWZ"  

VFR Pilots are expected to enter the MB CTR at `A010` as per ERSA. However, be aware that some pilots may not be familiar with this requirement.

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

## Helicopter Operations
### Circuits
#### Day VFR Circuits
Circuit altitude: `A007`.

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

##### Process

- Helicopters established on the eastern grass or western triangle do not require clearance for low-level operations below `A001`.
- Pilots must report airborne before each circuit. If departing, they must include intentions. Pilots must stay below `A001` until they are acknowledged.
- Controllers provide traffic information only on initial circuits. ADC does not positively control these operations or provide sequencing.
- Acknowledge the callsign or issue departure instructions. Hold aircraft if conflicting with other traffic.
- After circuit training, pilots will nominate their landing HLS during the airborne call and report downwind before transitioning to the arrival procedure.
- ADC may additionally notify pilots of additional inbound helicopter circuit traffic affecting the eastern grass or western triangle if workload allows.

!!! tip
    Where traffic permits, helicopters may be instructed to air transit to their designated areas of operations, to expedite their repositioning.

!!! phraseology
    **RJB**: "Moorabbin Tower, RJB, R44, at the southern apron, with information N, request circuits"  
    **MB ADC**: "RJB, Moorabbin Tower, air transit Eastern Grass, report airborne"  
    **RJB**: "Air transit Eastern Grass, RJB"  

    **RJB**: "Moorabbin Tower, RJB, airborne"  
    **MB ADC**: "RJB"

    *RJB, established at the Eastern Grass, becomes airborne for circuits*  
    **RJB**: "RJB, Airborne"  
    **MB ADC**: "RJB"

#### Night Circuits
Night operations must comply with fixed wing operations.

## Coordination
### Departures
[Next](../../controller-skills/coordination.md#next) coordination is required from MB ADC to ML TCU for all aircraft **entering ML TCU CTA**.

The Standard Assignable level from **MB ADC** to **ML TCU** is:

| Aircraft | Level |
| ----- | ---- |
| All | The lower of `A050` and `RFL` |

Aircraft who will transit Class G airspace on climb into CTA must be **cleared to leave and re-enter controlled airspace** on climb to their assigned level.

!!! phraseology
    **MB ADC**: "SGE, leave and re-enter controlled airspace climbing to A050, no reported IFR traffic. Contact Melbourne Departures on 129.4"  
    **SGE**: "Leave and re-enter controlled airspace climbing to A050, departures 129.4, SGE"

### Arrivals/Overfliers
ML TCU will heads-up coordinate arrivals/overfliers from their Class C to MB ADC.

- **IFR arrivals** will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to MB ADC, unless MB ADC nominates a restriction.
- **VFR arrivals** will not be coordinated, and will need to receive their airways clearance from MB ADC.

!!! phraseology
    <span class="hotline">**MDS** -> **MB ADC**</span>: "To the west, PLE, for the NDB-A"  
    <span class="hotline">**MB ADC** -> **MDS**</span>: "PLE, NDB-A"

!!! tip
    Remember that IFR aircraft are only separated from other IFR or SVFR aircraft in class D. Use other separation methods, such as holding a departure on the ground, if separation is required with these aircraft.