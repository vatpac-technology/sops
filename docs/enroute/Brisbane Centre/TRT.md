---
  title: Territory (TRT)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Territory** | **Brisbane Centre** | **133.200** | **BN-TRT_CTR** |
| Kimberley† | Brisbane Centre | 133.400 | BN-KIY_CTR |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

### CPDLC

The Primary Communication Method for ISA is [CPDLC](../../../client/cpdlc).

The CPDLC Station Code is `YISA`.

Voice may be used in lieu when applicable.

## Airspace

<figure markdown>
![Territory Airspace](../assets/trt.png){ width="700" }
  <figcaption>Territory Airspace</figcaption>
</figure>

TRT is responsible for **KIY** when they are offline.  

### Reclassifications
#### BRM CTR
When **BRM ADC** is offline, BRM CTR (Class D/E `SFC` to `A055`) reverts to Class G, and is administered by KIY. Alternatively, KIY may provide a [top-down procedural service](../../../aerodromes/Broome) if they wish.

## Sector Responsibilities
TRT is responsible for sequencing, issuing STAR Clearances, and issuing descent for aircraft bound for YPDN.  
KIY is responsible for issuing descent and ascertaining arrival intentions for aircraft bound for YBRM.
KIY is also responsible for sequencing and issuing descent to aircraft bound for YCIN.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| STR, KIY | TRT | YPDN | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| STR, KIY, ISA(ARA) | TRT | YPDN | |

## Coordination

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### TRT Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### DN TCU
#### Airspace
DN TCU owns the airspace within a 40NM radius of the DN DME from `SFC`–`F180`  

DN TCU is also responsible for Active Restricted Area R264 A-K and R230 A-F  

DAW may request DN TCU (`SFC`–`F240`) from TRT to facilitate military transits to/from R264 A-K and R230 A-F  

Refer to [Darwin TCU Airspace Division](../../../terminal/darwin/#airspace-division) for information on airspace divisions when **DAW** is online.

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YPDN**; and  
- Assigned a STAR; and  
- Assigned `A100`

All other aircraft coming from TRT CTA must be **Heads-up** Coordinated to DN TCU prior to **20nm** from the boundary.

#### Departures
Voiceless for all aircraft:

- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F180` or the `RFL`

All other aircraft going to TRT CTA will be **Heads-up** Coordinated by DN TCU.

### BRM ADC
#### Airspace
BRM ADC is responsible for the Class D airspace `SFC` to `A055`, as well as the Class E airspace `1200ft AGL` to `A055`, within the BRM CTR.

#### Departures
Departures from YBRM in to KIY CTA will be coordinated when ready for departure.  

!!! example
    <span class="hotline">**BRM ADC** -> **KIY**</span>: "Next, ANO333"  
    <span class="hotline">**KIY** -> **BRM ADC**</span>: "ANO333, Unrestricted"  
    <span class="hotline">**BRM ADC** -> **KIY**</span>: "ANO333"  

The Standard Assignable level from BRM ADC to TRT(KIY) is the lower of `A050` or the `RFL`, any other level must be prior coordinated.

#### Arrivals
YBRM arrivals shall be heads-up coordinated to **BRM ADC** from TRT prior to **5 mins** from the boundary.

!!! example
    <span class="hotline">**TRT** -> **BRM ADC**</span>: "Via SAFIR, FD621”  
    <span class="hotline">**BRM ADC** -> **TRT**</span>: "FD621"  

The Standard Assignable level from TRT(KIY) to BRM ADC is `A060`, any other level must be prior coordinated.

### CIN TCU
#### Airspace
The limits of the CIN TCU are `SFC` to `F200` within 25 DME CIN. This may be amended by NOTAM.

#### Arrivals/Overfliers
The Standard assignable level from TRT(KIY) to CIN TCU is `F130`, tracking via CIN VOR.

All other aircraft must be voice coordinated to CIN TCU prior to **20nm** from the boundary.

#### Departures
The Standard Assignable level from CIN TCU to TRT(KIY) is `F190`, and tracking via their planned route.

#### CIN ADC
When CIN TCU is offline, coordination is not required between TRT(KIY) and CIN ADC. Aircraft entering CIN ADC airspace shall be handed off, and instructed to contact CIN ADC for onwards clearance.

CIN ADC owns the Class C airspace within the CIN MIL CTR from `SFC` to `A015`.

### TN TCU
Reserved.

### IND(INE) (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.

### International (WAAF)
Coordination to International units must be done prior to **30 mins** from the boundary in the following format:

- *"Estimate"*
- Callsign
- Boundary Point
- Estimate
- Level
- *"On climb"*/*"On descent*" (if applicable)

!!! example
    <span class="coldline">**TRT** -> **WAAF CTR**</span>: "Estimate, SIA236, KIKEM time 21, F320"  
    <span class="coldline">**WAAF CTR** -> **TRT**</span>: "SIA236, F320"