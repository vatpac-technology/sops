---
  title: Camden (YSCN)
---

--8<-- "includes/abbreviations.md"


## Positions

| Name               | Callsign       | Frequency        | Login Identifier                         |
| ------------------ | -------------- | ---------------- | ---------------------------------------- |
| **Camden ADC**  | **Camden Tower**  | **120.100**          | **CN_TWR**                        |
| **Camden SMC**   | **Camden Ground**   | **121.900**          | **CN_GND**                       |
| Camden ATIS        |                | 125.100          | YSCN_ATIS                                |

 
In the absence of an SMC controller, ADC shall assume the SMC responsibilities.
<figure markdown>
![YSCN Maneuvering Area](img/YSCN_ManMap.PNG){ width="500" }
<figcaption>Maneuvering Area</figcaption>
</figure>

## Airspace
Tower airspace is defined as between SFC to 2000 FT.  
<figure markdown>
![Camden Tower Airspace](img/YSCN_Vatsys.PNG){ width="700" }
<figcaption>Camden Tower Airspace</figcaption>
</figure>  

## VFR Inbound Procedures
VFR aircraft should track via one of the VFR inbound points and be instructed as below:

| VFR Approach Point | RWYs 06  | RWYs 24 |
| ----------------| --------- | ---------- |
| Bringelly (BRY)    | *"Join Downwind RWY 06, Maintain A018, Report 2NM"*     | *"Join Final RWY 24, Maintain A018, Report Oran Park (ONPK)"*       |
| Menangle (MEG)   | *"Overfly Camden to join Mid-Field Crosswind RWY 06, Maintain A018, Report Overhead"*      | *"Overfly Camden to join Mid-Field Crosswind RWY 24, Maintain A018, Report Overhead"*       |
| Picton (PIC)   | *"Overfly Camden to join Mid-Field Crosswind RWY 06, Maintain 1800ft, Report Overhead"*      | *"Overfly Camden to join Mid-Field Crosswind RWY 24, Maintain A018, Report Overhead"*       |
| The Oaks (THK)   | *"Join Final RWY 06, Maintain A018, Report 3NM"*    | *"Join Downwind RWY 24, Maintain A018, Report 2NM"*      |
| Mayfield (MYF)   | *"Join Base RWY 06, Maintain A018, Report 2NM"*      | *"Join Base RWY 24, Maintain A018, Report 2NM"*       |

When Aircraft are clear of conflicting traffic below, aircraft may *"cleared visual approach"*.

When an aircraft reports at their specified report point (or on downwind), issue the aircraft its sequence in the circuit.
!!! example
    *"XEM, number 3 Runway 06, follow the C172 on base"*


## Circuits
The circuit direction changes depending on time of day and runway being used.

| Runway | Day  | Night |
| ----------------| --------- | ---------- |
| 06    | Left       | Left        |
| 24   | Right | Right  |
| 10 (Grass) | Left | - |
| 28 (Grass) | Right | - |

Circuits are flown at `A013` (High Performance Aircraft: `A018`)

When an aircraft reports on downwind, indicate their position in the sequence (and give a follow instruction if the sequence has changed since the last circuit).
!!! example
    **JKA:** "JKA, downwind, touch and go"  
    **CN ADC:** "JKA, number 2"


## Departures

All aircraft must depart at `A013` via an extended leg of the circuit.
Upon reaching 2NM CN, all VFR aircraft should monitor the appropriate area frequency (Sydney Approach). A frequency transfer will not be issued to VFR aircraft.
Departing IFR aircraft will receive a frequency transfer.

### Depart On Climb
Some aircraft may request to leave the CTR on climb above `A013`.  If there is no reported traffic above the zone and no conflicting traffic at `A018`, aircraft may be cleared to depart on climb.

!!! example
    **CN ADC:** "PCN, runway 06, cleared for takeoff"  
    **PCN:** "Runway 06, cleared for takeoff, PCN"  

    **PCN:** "PCN, request depart on climb"  
    **CN ADC:** "PCN, depart on climb"


## ATIS
### Approach Expectation

When there is significant cloud in the YSCN area below 3500ft, the APCH field must include `EXP INST APCH`.

## Coordination
### CN SMC & ADC / SY TCU

#### Taxi Call

IFR aircraft must be coordinated with the SY TCU controller responsible for Sydney Departures South (SDS).  **CN SMC** will perform a 'Taxi' call to **SDS**, who in response will issue a squawk code.

!!! example
    **CN ADC** -> **SY TCU**: "Taxi's, MHQ, Lord Howe, runway 06”  
    **SY TCU** -> **CN ADC**: “MHQ, squawk 0134"  
    **CN ADC** -> **SY TCU**: “Squawk 0134, MHQ"  

#### Ready Call
CN ADC must advise SY TCU when the aircraft has called 'Ready'. In response to a ready call, SY TCU will issue a traffic statement.

!!! example
    **CN ADC** -> **SY TCU**: "Ready, MHQ, Runway 06"  
    **SY TCU** -> **CN ADC**: "MHQ, traffic is MEH, an IFR AC50, tracking SHL RAKSO SBKWI, 3500ft, estimate RAKSO time 35" (or "No Reported IFR Traffic")  
    **CN ADC** -> **SY TCU**: "Traffic is MEH tracking SHL RAKSO SBKWI 3500ft, RAKSO at 35"  
    
    **CN ADC:** "MHQ, traffic is MEH, IFR AC50 tracking SHL RAKSO SBKWI at 3500ft, estimating RAKSO at time 35, runway 06, cleared for takeoff"  
    **MHQ:** "Copy MEH, runway 06, cleared for takeoff, MHQ"
      
    **CN ADC:** "MHQ, contact Sydney Departures on 129.7"  

!!! note
    Note: Because aircraft enter Class G after departure, an airways clearance need not be issued by CN TWR. This will be done on first contact with Sydney TCU.
    Therefore, a *next* call & *departure instructions* are not required. You must however, pass the above (ready) coordination & obtain a traffic statement.


### SY TCU / CN ADC

#### Arrival Coordination

##### Intrument Approaches

SY TCU must advise CN ADC of the aircraft's EAT (Estimated Approach Time) at least 10 minutes prior to the EAT at SCNWI for the RNP W approach.

SY TCU must transfer the aircraft at SCNWI for the RNP W approach.
Prior to transfer, SY TCU must provide the aircraft with a traffic statement and advise *"identification terminated"*.

CN ADC is responsible for issuing a clearance into the CN CTR and for coordination with SY TCU in the event of a missed approach (or on completion of airwork if applicable).

SY TCU will **NOT** clear the aircraft for the approach.

!!! example
    **SY TCU** -> **CN ADC**: “EAT, HRP via RNP W at time 59”  
    **CN ADC** -> **SY TCU**: “HRP, RNP W”   


##### Visual Tracking

SY TCU must coordinate the Estimate and approximate inbound track for IFR aircraft. Where possible, pass the Estimate no later than 10 minutes prior.

!!! example
    **SY TCU** -> **CN ADC**: “Estimate, TJV via RIC time 02.”  
    **CN ADC** -> **SY TCU**: “TJV” 


#### IFR overflying YSCN

SY TCU must advise CN ADC of observed IFR aircraft overflying CN CTR below 2500ft.