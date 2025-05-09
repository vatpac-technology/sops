---
  title: Tasmania TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login ID              |
| ------------------ | --------------| -------------- | ---------------- | ---------------------|
| **Hobart Approach**  | **HBA** | **Hobart Approach**  | **125.550**       | **HB_APP**    |
| **Launceston Approach**  | **LTA** | **Launy Approach**   | **123.800**        | **LT_APP**                 |

!!! Note
    HBA may elect to extend to LTA and vice versa, callsigns remain the same. See [Controller Skills](../controller-skills/extending.md) for details.

## Airspace
**LTA** owns the airspace `SFC` to `F245` within a 30nm radius of the LT VOR. LT ADC owns the Class D airspace within LT CTR `SFC` to `A015` when open.  

**HBA** owns the airspace `SFC` to `F245` within the remainder of the Tasmania TMA (shown below). HB ADC owns the Class D airspace within HB CTR `SFC` to `A015` (north of runway centreline) and `A025` (south of runway centreline) when open. 

<figure markdown>
![TAS TCU](img/TASTCU.png){ width="700" }
</figure>

### LTA Release to HUO
The Airspace on and west of the IRSOM-MORGO track `F125`-`F245` is permanently released from LTA to HUO, unless coordinated otherwise.

<figure markdown>
![LTA Release](img/ltarls.png){ width="500" }
  <figcaption>LTA Release</figcaption>
</figure>

## YMHB
All aircraft should be kept on SIDs and STARs. If due to operational requirements or routing, an aircraft is unable to accept the SID or STAR, voice coordination with HUO will be required.

## YMLT
Visual approaches are preferred into YMLT. If due to operational requirements, an aircraft is unable to accept a visual approach, coordination with **LT ADC** may be required.  

Runway 32L is regularly the duty runway due to prevailing winds. To assist traffic flow in and out of the TCU, ATC will instruct aircraft to track for runway 32L via one of the following routes:

| Via              | Routing      |
| ------------------ | --------------|
| IRSOM  | NODAS MLTSC |
| NUNPA  | ELREL MLTSA |

These routes keep arrivals within CTA and away from the departure stream(s).

!!! note
    Clearing aircraft to track via one of the above routes does **not** constitute a voiceless coordination route between LTA and LT ADC. Aircraft should still be heads-up coordinated to LT ADC prior to **5 minutes** to the boundary, unless coordinated otherwise.

## YCBG
Aircraft inbound to YCBG who will track via the HBA CTA should be issued an airways clearance by HBA, then passed to HB ADC when appropriate. HBA must coordinate any clearance limits issued to HB ADC. 

Aircraft inbound to YCBG who will track directly from Class G airspace to the CTR should contact HB ADC for clearance.

## Flow
### Local Knowledge
- IFR aircraft inbound to YCBG must be flowed as if they were arriving at YMHB, unless they can accept a visual approach and remain clear of the inbound tracks to YMHB

### Flow Tables
#### YMHB
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"

    | STAR | RWY 12 | RWY 30 |
    | ---------- | ---| -- |
    | **IPLET A**      | 12^ | 12^  |
    | **IPLET V**      | 10^ | 10^  |
    | **IPLET W**      | 10^ | 10^  |
    | **MORGO A**      | 12^ | 15  |
    | **MORGO V**      | - | 14  |
    | **MORGO W**      | - | 14  |

=== "Non-Jets"

    | STAR | RWY 12 | RWY 30 |
    | ---------- | ---| -- |
    | **IPLET A**      | 13^ | 13^  |
    | **IPLET V**      | 11^ | 11^  |
    | **IPLET W**      | 11^ | 12^  |
    | **MORGO A**      | 13^ | 17  |
    | **MORGO V**      | - | 16  |
    | **MORGO W**      | - | 16  |

#### YMLT
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**.

=== "Jets & DH8D"

    | Tracking | RWY 14R | RWY 32L |
    | ---------- | ---| -- |
    | IRSOM MLTNE        | 11^ | - |
    | IRSOM NODAS MLTSC  | - | 16 |
    | MIMIM MLTNG        | 15 | - |
    | MIMIM ELREL MLTSA  | - | 19  |
    | LATUM MLTND        | 15 | - |
    | LATUM MLTSB        | - | 11^  |

=== "Non-Jets"

    | Tracking | RWY 14R | RWY 32L |
    | ---------- | ---| -- |
    | IRSOM MLTNE        | 12^ | - |
    | IRSOM NODAS MLTSC  | - | 18 |
    | MIMIM MLTNG        | 17 | - |
    | MIMIM ELREL MLTSA  | - | 21  |
    | LATUM MLTND        | 17 | - |
    | LATUM MLTSB        | - | 12^  |

#### Corrections

| Situation | Correction |
| ----- | ----- |
| Assigned a reduced speed | +1 min, *except ^* | 
| Over 40kt of head/tailwind component | +1 min for headwind<br>-1 min for tailwind |

#### Assumptions
- Nil wind

### YMHB Calculator
<script type="module" src="../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YMHB"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YMHB"></div>

### YMLT Calculator
<script type="module" src="../../javascripts/flowCalculatorLogic.js" defer onerror="alert('Flow Calculator failed to load. Please refresh the page or submit a Helpdesk ticket.')"></script>
The following calculator will generate a landing time from a feeder fix ETA, or the reverse.

=== "Landing Time"
    <div class="flowCalculatorLandingTime" data-aerodrome="YMLT"></div>

=== "Feeder Fix Time"
    <div class="flowCalculatorFeederFixTime" data-aerodrome="YMLT"></div>

## Coordination

### Enroute
#### Departures
Voiceless for all aircraft:

- Assigned the lower of `F240` or the `RFL`; and  
- Tracking via a Procedural SID terminus

All other aircraft going to HUO CTA must be **Heads-up** Coordinated by TAS TCU prior to the boundary.

!!! phraseology
    <span class="hotline">**LTA** -> **HUO**</span>: "via IRSOM, QFA114, with your concurrence, will be assigned F150, for my separation with ZYX"  
    <span class="hotline">**HUO** -> **LTA**</span>: "QFA114, concur F150"

#### Arrivals
Voiceless for all aircraft:

- With ADES **YMLT** 
  - Tracking from **IRSOM** or **NUNPA** DCT **LT**; and  
  - Assigned `A090`  
- With ADES **YMHB** 
  - Assigned the **IPLET** or **MORGO** STAR; and  
  - Assigned `F130`  

All other aircraft coming from HUO CTA will be **Heads-up** Coordinated to TAS TCU.

### HBA
#### Airspace
HB ADC owns the Class D airspace in the HB CTR `SFC` to `A015` north of the runway centreline and `A025` south of the runway centreline. HBA owns the Class D and C airspace above these levels.

#### Departures
[Next](../controller-skills/coordination.md#next) coordination is **not** required to HBA for aircraft that are:   

- Departing from a runway nominated on the ATIS; and  
- Assigned the standard assignable level; and  
- Assigned a SID; or  
- Not entering HBA CTA

All other aircraft require a 'Next' call to HBA.

!!! note
    All departures from YCBG who will enter the HBA CTA will be Next coordinated by ADC.

The Standard Assignable level from **HB ADC** to **HBA** is:  

| Flight Rules | Level |
| ----- | ----- |
| IFR | `A080` |
| VFR | The lower of `A045` and `RFL` |

##### Airways Clearance
**HB SMC** shall give [heads-up](../controller-skills/coordination.md#airways-clearance) coordination to HBA controller prior to the issue of the following clearances:

- VFR departures entering HBA CTA
- Aircraft using a runway not on the ATIS

#### Arrivals
HBA will coordinate all YMHB & YCBG arrivals to HB ADC prior to **5 mins** from the boundary. This coordination shall be as per [Standard Heads-up format](../../controller-skills/coordination/#heads-up), with the addition of:

- Runway, if other than duty runway  
- Approach type, unless specifically nominated on the ATIS  
- IFR circuit joining instructions, if not on straight-in instrument approach

!!! phraseology
    <span class="hotline">**HBA** -> **HB ADC**</span>: "via BUSKA, QJE1789, for the ILS”  
    <span class="hotline">**HB ADC** -> **HBA**</span>: "QJE1789, ILS"

### LTA
#### Airspace
LT ADC owns the Class D airspace in the LT CTR `SFC` to `A015`. LTA owns the Class D and C airspace above `A015`.

#### Departures
[Next](../controller-skills/coordination.md#next) coordination is not required to LTA for aircraft that are:   

- Departing from a runway nominated on the ATIS; and  
-Assigned the standard assignable level; and  
-Assigned a SID; or  
-Not entering LTA CTA

All other aircraft require a 'Next' call to LTA. 

The Standard Assignable level from **LT ADC** to **LTA** is:  

| Flight Rules | Level |
| ------- | ------ |
| IFR | `A080` |
| VFR | The lower of `A045` and `RFL` |

LT ADC shall give [heads-up](../controller-skills/coordination.md#airways-clearance) coordination to LTA controller prior to the issue of the following clearances:  

- VFR departures entering LTA CTA
- Aircraft using a runway not on the ATIS 

#### Arrivals
LTA will coordinate all YMLT arrivals to LT ADC prior to **5 mins** from the boundary. This coordination shall be as per [Standard Heads-up format](../../controller-skills/coordination/#heads-up), with the addition of:

- Runway, if other than duty runway  
- Approach type, unless specifically nominated on the ATIS  
- IFR Circuit joining instructions, if not on Straight-in instrument approach

!!! phraseology
    <span class="hotline">**LTA** -> **LT ADC**</span>: "via IRSOM, JST416, for the DGA, will join left downwind 32L”  
    <span class="hotline">**LT ADC** -> **LTA**</span>: "JST416"

### LTA/HBA Internal
All aircraft transiting between internal TAS TCU boundaries must be heads-up coordinated.

!!! phraseology
    <span class="hotline">**HBA** -> **LTA**</span>: "via LATUM, AM773"  
    <span class="hotline">**LTA** -> **HBA**</span>: "AM773, F130"