---
  title: Operations
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Sydney Approach North**    |**SAN**| **Sydney Approach**   | **124.400**         | **SY_APP**                                   |
| Sydney Approach South†   |SAS| Sydney Approach   | 128.300          | SY-S_APP                                 |
| Sydney Departures North†    |SDN| Sydney Departures  | 123.000         | SY_DEP          |
| Sydney Departures South†   |SDS| Sydney Departures | 129.700          | SY-S_DEP         |
| Sydney Director West† |SFW| Sydney Director   | 126.100          | SY-D_APP                               |
| Sydney Director East† |SFE| Sydney Director   | 125.300          | SY-DE_APP                               |
| Sydney Flow†        |SFL|                |          | SY-FLW_CTR                               |

† **Non-standard position** – may only be used in accordance with VATPAC Ratings and Controller Positions Policy (link)
## Airspace
The Sydney TMA spans a 45nm Radius around YSSY from SFC-FL280.  
SY TCU is responsible for the Sydney TMA, except:
a) BK CTR when BK TWR is active;
b) CN CTR when CN TWR is active;
c) any airspace released to an external unit (e.g. tower) either by a provision of this TMA SUP or as negotiated.

BK CTR reverts to Class G when BK TWR is offline, and is administered by the relevant SY TCU controller.  
CN CTR reverts to Class G when CN TWR is offline, and is administered by the relevant SY TCU controller.  
#### Airspace Structural Arrangements

Pursuant to Section 3 of the Controller Positions and Ratings Policy 5.1, the following rules apply, in the order presented, to these controller positions, except SFL:  
a) **“North”**/**”West”** positions shall assume the airspace of corresponding **“South”**/**”East”** positions when the latter are inactive (e.g. **SAN** assumes **SAS** airspace), and vice versa;  
b) Approach assumes Director/Departure airspace “on-side” when the latter positions are inactive (e.g. with **SAS** and **SAN** online only, **SAS** assumes **SDS** and **SFW**) 
## Arrival Procedures
#### Level Assignment
When assigning levels on descent to aircraft, remember that you will not receive "Next" Coordination on aircraft assigned Standard Assignable Levels (ie A050 for Jets, A030 for Non-Jets), meaning an aircraft could depart at any time without prior warning and climb to A050. So in order to assure separation between arrivals and departures, do not assign below **A060** to aircraft until they are clear of the active runway's departure path.

!!! example
    For an aircraft inbound from the north on the BOREE3A arrival Runway 34R, assign A060 until south of the field, then lower as required
### Parallel Runway Operations

#### Runway Selection
Unless operationally required, aircraft shall be assigned the following runways for arrival when PROPS are in progress:

| Aircraft tracking | Runway  |
| ----------------| --------- |
| via RIVET   | 16R/34L      |
| via ODALE | 16R/34L |
| via MARLN | 16L/34R |
| via BOREE | 16L/34R |
| via MEPIL | 16L/34R |
| Other aircraft: |
| From the NORTH and EAST | 16L/34R |
| From the SOUTH and WEST | 16R/34L |

#### ILS

Aim to vector aircraft to the following Intercept points during PROPS:

| Runway | Distance from Threshold | Level  |
| --| ----------------| --------- |
|RWY 16R/34L| Approx 10nm   | A030     |
|RWY 16L/34R| 15nm of further | A040 |

#### Independent Visual Approach

When conducting IVAs, aircraft shall not be transferred to SY ADC until established on final.

!!! example
    SFW: “BNZ444, Turn left heading 360, join final Runway 34L, from that heading Cleared Independent Visual Approach, report on final” `AIP GEN 3.4 6.17.8 3`   
    BNZ444: "Left heading 360, join final Runway 34L, from that heading Cleared Independent Visual Approach, wilco, BNZ444"  
    ...  
    BNZ444: "BNZ444, on final"  
    SFW: "BNZ444, Contact Sydney Tower 120.5"  
    BNZ444: "120.5, BNZ444" 

## Sydney Harbour Scenic Flights
The airspace above Sydney Harbour is Class C and availability of an airways clearance to enter depends on traffic levels, controller workload and VMC. Flights may be cleared for one of two standard scenic flight routes at A015, **Harbour Scenic ONE** or **Harbour Scenic TWO**, which are described below. Pilot preference should be accommodated where traffic permits.

Aircraft must Track via Class G airspace to Long Reef and contact ATC prior to reaching Long Reef requesting a ‘Harbour Scenic’ clearance. If a clearance cannot be given immediately, instruct the pilot to remain in Class G airspace

!!! example
    “ABC, remain outside Class C airspace and standby”

A **‘Harbour Scenic ONE’** (or **‘TWO’**) clearance is used to authorise flight in the nominated route at 1,500FT. Sydney Airport QNH must be issued with the clearance.

!!! example
    “ABC, Cleared Harbour Scenic One, Sydney QNH 1014”

<figure markdown>
![Sydney Harbour Scenic One](img/hs1.jpg){ width="400" }
  <figcaption>Sydney Harbour Scenic One</figcaption>
</figure>

<figure markdown>
![Sydney Harbour Scenic Two](img/hs2.jpg){ width="400" }
  <figcaption>Sydney Harbour Scenic Two</figcaption>
</figure>

These can be displayed on vatSys using the SY_VFR map.
## Airspace Division

The divisions of the airspace between SAN, SAS, SDS, SDN, SFW and SFE change based on the Runway Mode.

<figure markdown>
![34 PROPS TCU Structure](img/34PROPS.png){ width="700" }
  <figcaption>34 PROPS TCU Structure</figcaption>
</figure>
