---
  title: Adelaide TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Adelaide Approach East**    |**AAE**| **Adelaide Approach**   | **118.200**         | **AD_APP**                                   |
| Adelaide Approach West†    |AAW| Adelaide Approach  | 124.200         | AD-W_APP          |
| Adelaide Flow†        |AFL|                |          | AD_FMP                              |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

## Airspace
The Vertical limits of the AD TCU are `SFC` to `F245`.

### Reclassifications
#### PF CTR
PF CTR reverts to Class G when **PF ADC** is offline, and is administered by the relevant AD TCU controller.

See also: [PF ADC Offline](#pf-adc-offline).

#### EDN CTR
EDN CTR reverts to Class G when **EDN ADC** is offline, and is administered by the relevant AD TCU controller.  

### Airspace Division
!!! note
    The following diagram does not include non AD TCU areas of responsibility such as PF CTR or EDN CTR

<figure markdown>
![AD TCU Structure](img/adtcu_annotated.png){ width="700" }
  <figcaption>AD TCU Structure</figcaption>
</figure>

## Scenic Coastal Flights
VFR aircraft may transit the control zone tracking coastal north or southbound, generally at `A005`. **AD TCU** is responsible for ensuring these aircraft remain separated from aircraft arriving/departing at YPAD and may delegate this responsibility to **AD ADC**.  

Coordinate the aircraft with ADC, including the use of the appropriate clearance limit in the table below, then issue airways clearance. Before the aircraft reaches the clearance limit, transfer them to ADC who will manage their transit of the extended runway centreline.  The clearance limits in the table below will ensure that coastal aircraft remain clear of the runway 05 approach path and runway 23 departure/missed approach path. 

| Direction of Travel | Clearance Limit |
| --- | --- |
| Northbound | BTJ |
| Southbound | HNLY |

<figure markdown>
![Clearance Limits](img/adclearancelimits.png){ width="500" }
  <figcaption>Clearance Limits (red) and Approach/Departure Path (green)</figcaption>
</figure>

!!! example
    **CEY:** "Adelaide Approach, CEY, Cessna 172, 4nm south of PNL, 1,000ft, received charlie, request coastal northbound"  
    **AD TCU:** "CEY, Adelaide Approach, squawk 0542, remain clear of class C airspace"  
    **CEY:** "Squawk 0542, remain OCTA, CEY"  

    <span class="hotline">**TCU** -> **ADC**</span>: "South of PNL, CEY, for coastal northbound, 500ft, clearance limit BTJ"  
    <span class="hotline">**ADC** -> **TCU**</span>: "CEY"  

    **AD TCU:** "CEY, identified, cleared coastal offshore northbound, not above 500ft, clearance limit BTJ"  
    **CEY:** "Cleared coastal offshore northbound, not above 500ft, clearance limit BTJ, CEY"  

    *Before CEY reaches BTJ:*  
    **AD TCU:** "CEY, contact Adelaide Tower, 120.5"  
    **CEY:** "120.5, CEY"

Once the aircraft has transited the extended runway centreline and is clear of potential conflict with YPAD, ADC will transfer them back to the TCU.

## PF ADC Offline
Due to the low level of CTA at YPPF, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **ABC**: "Adelaide Approach, ABC, PC12, POB 8, IFR, taxiing YPPF for YPAG, Runway 21R"   
    **AD TCU**: "ABC, Adelaide Approach, Squawk 3601, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **ABC**: "Squawk 3601, wilco, ABC"  

    **ABC**: "ABC, ready Runway 21R, request clearance"  
    **AD TCU**: "ABC, cleared to YPAG via DOLVU, flight planned route, PARAFIELD1 departure, climb via SID to A040"   
    **ABC**: "Cleared to YPAG via DOLVU, flight planned route, PARAFIELD1 departure, climb via SID to A040, ABC"  
    **AD TCU**: "ABC, assigned heading right 360, report airborne"  
    **ABC**: "Assigned right 360, wilco, ABC"

## Flow
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**, which can be used to plan sequencing actions within the TCU.

The times assume there is *Nil wind*.

### Jets

| Feeder Fix | 05Z | 05V/W/X | 23A/Z | 23V |
| ---------- | --- | ------- | ----- | --- |
| ALEXI      | 14  | 13      | -     | -   |
| DRINA      | -   | -       | 14    | 13  |
| BLACK      | 16  | 15      | 12^   | -   |
| KLAVA      | 16  | 15      | 13    | 12  |
| ERITH      | -   | -       | 13    | 12  |
| MARGO      | 14  | 13      | 15    | 13  |
| RIKAB      | 13  | 12^     | 17    | 15  |

- **GULLY** - Threshold is **5 minutes**  
- **PADSI** - Threshold is **3.5 minutes**  
- Add **1 minute** for aircraft assigned a reduced speed, Except ^  
- Subtract **1 minute** for MX or CSR
- For **Non-Jets** (except **DH8D**) tracking via Jet STAR;
    - Add **2 minutes** (Except ^)
    - Add only **1 minute** for ^

!!! note
    The adjustments above are **cumulative**. For example, an aircraft with a **MX** on the **16M STAR**, would have **3 minutes** subtracted in total

### Non-Jets

This table assumes that aircraft will be assigned:

- The appropriate *Non-Jet STAR* (**ATPIP**, **ELROX**, **GULFS**, **PAMMY**, **RUSSL**, **SURGN**), or if none is available:
- *No STAR*

Thence track via a **5nm final** for the assigned runway.

For Non-Jets tracking via the *full Jet STARs*, see [table above](#jets)

| Feeder Fix | 05  | 12  | 23  | 30  |
| ---------- | --- | --- | --- | --- |
| ALEXI      | 12  | 14  | 12  | 11  |
| DRINA      | 14  | 17  | 14  | 13  |
| BLACK      | 16  | 15  | 13  | 13  |
| RUSSL      | 17  | 15  | 14  | 13  |
| KLAVA      | 15  | 13  | 13  | 16  |
| ERITH      | -   | -   | -   | -   |
| MARGO      | 13  | 12  | 13  | 15  |
| RIKAB      | 13  | 13  | 15  | 16  |
| ELROX      | 11  | 11  | 14  | 13  |

- **5nm final** - Threshold is **2 minutes**  
- Subtract **1 minute** for MX  
- Subtract **1 minute** for **DH8D**

!!! note
    The adjustments above are **cumulative**. For example, a **DH8D** with a **MX**, would have **2 minutes** subtracted in total

## Coordination
### Enroute
#### Departures
Voiceless for all aircraft:
 
- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F240` or the `RFL`

All other aircraft going to TBD CTA must be **Heads-up** Coordinated by AD TCU prior to the boundary.

!!! example
    <span class="hotline">**AD TCU** -> **TBD**</span>: "PFY1234, request DCT LOLLS"  
    <span class="hotline">**TBD** -> **AD TCU**</span>: "PFY1234, concur DCT LOLLS"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YPAD**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from TBD CTA will be **Heads-up** Coordinated to AD TCU.

### AD ADC
#### Auto Release
'Next' coordination is **not** required from AD ADC for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

!!! example
    <span class="hotline">**AD ADC** -> **AD TCU**</span>: "Next, ABC, runway 05"  
    <span class="hotline">**AD TCU** -> **AD ADC**</span>: "ABC, Track Extended Centreline, unrestricted"  
    <span class="hotline">**AD ADC** -> **AD TCU**</span>: "Track Extended Centreline, ABC"

The Standard Assignable level from AD ADC to AD TCU is:  
For Jets: `A050`  
For Non-Jets: The lower of `A040` or the `RFL`

### AD TCU Internal
All aircraft transiting between internal AD TCU boundaries must be heads-up coordinated.

!!! example
    <span class="hotline">**AAW** -> **AAE**</span>: "via AD, FD123"  
    <span class="hotline">**AAE** -> **AAW**</span>: "FD123, A090"   

Boundary coordination is not required between AAW and AAE for aircraft arriving or departing tracking via the 05/23 extended centreline.

### PF ADC
#### Airspace
PF ADC is responsible for the Class D airspace in the PF CTR `SFC` to `A015`.

Refer to [Reclassifications](#pf-ctr) for operations when PF ADC is offline.

#### Departures
When the aircraft is ready for departure, PF ADC will coordinate with AD TCU for permission to release the aircraft into CTA.

!!! example
    <span class="hotline">**PF ADC** -> **AAW**</span>: "Next, XMM, 03L"  
    <span class="hotline">**AAW** -> **PF ADC**</span>: "XMM, Heading 020, unrestricted"  
    <span class="hotline">**PF ADC** -> **AAW**</span>: "Heading 020, XMM"

The Standard Assignable level from PF ADC to AD TCU is the lower of `A030` or the `RFL`, any other level must be prior coordinated.

#### Arrivals/Overfliers
AD TCU will heads-up coordinate arrivals/overfliers from Class C to PF ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to PF ADC, unless PF ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**AAW** -> **PF ADC**</span>: "via PAL, YTS"  
    <span class="hotline">**PF ADC** -> **AAW**</span>: "YTS, A010"

### EDN ADC
#### Departures
Aircraft departing YPED in to AD TCU Class C will be coordinated from **EDN ADC** at Taxi.

!!! example
    <span class="coldline">**EDN ADC** -> **AD TCU**</span>: "Taxi, BLKT11 for YMES, via GULLY"  
    <span class="coldline">**AD TCU** -> **EDN ADC**</span>: "BLKT11"  

When the aircraft is ready for takeoff, **EDN ADC** will give a "Next" call, where AD TCU will provide the cleared level.

!!! example
    <span class="hotline">**EDN ADC** -> **AD TCU**</span>: "Next, BLKT11, runway 18"  
    <span class="hotline">**AD TCU** -> **EDN ADC**</span>: "BLKT11, A050"  
    <span class="hotline">**EDN ADC** -> **AD TCU**</span>: "A050, BLKT11"

#### Arrivals
AD TCU Must coordinate the sequence information to **EDN ADC** prior to transfer of jurisdiction.

!!! example
    <span class="coldline">**AD TCU** -> **EDN ADC**</span>: "New sequence of 2. MRNR21, via AD, Number 1. MRNR22, via AD, Number 2"  
    <span class="coldline">**EDN ADC** -> **AD TCU**</span>: "MRNR21, Number 1. MRNR22, Number 2"  