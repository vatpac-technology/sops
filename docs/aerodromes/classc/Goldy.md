---
  title: Gold Coast (YBCG)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Gold Coast ADC** | **Gold Coast Tower**   | **118.700**       | **CG_TWR**                       |
| **Gold Coast SMC** | **Gold Coast Ground**  | **121.800**       | **CG_GND**                       |
| **Gold Coast ACD** | **Gold Coast Delivery** | **128.750**       | **CG_DEL**                       |
| Gold Coast ATIS    |                        | 134.500          | YBCG_ATIS                        |

## Airspace
CG ADC is responsible for the Class C Airspace within the CG CTR `SFC` to `A015`.

<figure markdown>
![CG ADC Airspace](img/CGTWR.png){ width="700" }
  <figcaption>CG ADC Airspace</figcaption>
</figure>

## Departures
RNAV jet-aircraft planned via APAGI shall be issued the APAGI SID.  
!!! note
    For RNP (0.3) approved operators, the RWY14 CUDGN SID and RWY32 BURLI SID are available for departures via APAGI.  
The GOLD COAST (RADAR) SID shall be assigned to all other IFR aircraft, except those assigned Runway 35.  
IFR departures from Runway 35 shall be assigned a visual departure.  

Radar SID aircraft shall be cleared subject to the following conditions for noise abatement purposes:

| Via             | 14      | 32       |
| ------------------ | -------------- | ---------------- |
|  **North**   |   Left (14)/Right (32) turn and then over water until `A030`    | Left (14)/Right (32) turn and then over water until `A030` |
|  **East**   |   Left (14)/Right (32) turn and then over water until `A030`      | Left (14)/Right (32) turn and then over water until `A030` |
|  **South** Jets   |   Minor right turn then over water until 5 DME   |    Over water until south of KCFF (CG130/7 NM) and `A050`    |
|  **South** Non-Jets  |    left(14)/right(32) turn and then over water until `A030`     |Left (14)/Right (32) turn and then over water until `A030`  |


## Arrivals
Arriving aircraft that are operating at or below `A015` may contact ADC for inbound clearance. These aircraft shall be assigned a discrete SSR code but shall not be radar identified.  
Aircraft shall be cleared subject to the following conditions:

| Via             | 14      | 32       |
| ------------------ | -------------- | ---------------- |
|  **North** Jets   |  Not below `A050` until vectored over water to join final    | Via right circuit for 10 NM final or right base south of DNGR  |
|  **North** Non-Jets   |   Not below `A030` until vectored over water to join final   | Via right circuit for 10 NM final or right base south of DNGR  |
|  **East**   |   Via LAMSI STAR or over water until final   |    Join 10 NM final   |
|  **South** Jets   |    Via STAR or not below `A050` until over water to join final |  Via STAR to join final  |
|  **South** Non-Jets   |    Via STAR or not below `A030` until over water to join final |  **IMC:** via STAR or **VMC:** Join left base for 2 NM final |

## Runway Selection
Preferred runway is Runway 14 - all hours
The crosswind Runways 17/35 may be used at the same time as the main runways.

### Preferred RWY 14 Approach (All Hours) - Noise Abatement
The preferred approach for Jet aircraft above 5,700KG MTOW (unless due weather or critical operations requirements) is as follows:  
<ol><li>RNP W RWY 14</li><li>RNP Y RWY 14</li><li>RNP Z RWY 14</li><li>VISUAL APCH RWY 14</li><li>ILS RWY 14</li></ol>

### Circuit Direction
Circuits are to be conducted at `A010`.  

| Runway               | Direction       |
| ------------------ | -------------- |
| 14 | Left  |
| 32 | Right  |
| 17 | Left | 
| 35 | Right    | 

## VFR Procedures

Aircraft transiting the Gold Coast CTR shall be cleared via the inland VFR route.  
Aircraft tracking southbound should contact ADC at Robina Town Centre (ROT) for clearance.  
Aircraft tracking northbound should contact ADC approaching Cudgen Lake for clearance.  
Aircraft requiring to transit the CTR coastal will be subject to delays depending on traffic in the Gold Coast CTR.  

## Helicopter Operations
Local helicopter operations are conducted on the Western Grass which is the area contained by blue gable markers north of the VOR and west of the runway intersection. This is marked on the aerodrome chart as “HELO OPS”.  
The HLS (Helipad) is located between the GA Apron and Taxiway Golf.  
Circuits from the Western Grass are to be made in the same direction as the duty runway.

## Coordination
### Auto Release
'Next' coordination is **not** required to BN TCU for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

All other aircraft require a 'Next' call to CG TCU.

!!! example
    <span class="hotline">**CG ADC** -> **BAC**</span>: "Next, CBN, runway 14"  
    <span class="hotline">**BAC** -> **CG ADC**</span>: "CBN, heading 030, unrestricted"  
    <span class="hotline">**CG ADC** -> **BAC**</span>: "Heading 030, CBN"  

    **CG ADC**: "CBN, Assigned heading left 030, Runway 14, Cleared for Takeoff"  
    **CBN**: "Left heading 030, Runway 14, Cleared for Takeoff, CBN"

The BN TCU controller can suspend/resume Auto Release at any time, with the concurrence of **CG ADC**.

The Standard Assignable level from CG ADC to BN TCU is:  
For Jets: `A060`  
For Non-Jets: The lower of `A060` or the `RFL`

### Start Clearance
A start clearance is required for aircraft planned to YBBN. Start clearance must be coordinated with BN TCU.