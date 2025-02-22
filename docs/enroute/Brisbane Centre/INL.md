---
  title: Inverell (INL)
---

--8<-- "includes/abbreviations.md"
## Positions

| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Inverell** | **Brisbane Centre** | **134.200** | **BN-INL_CTR** |
| <span class="indented">Downs :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 135.600 | BN-DOS_CTR |
| <span class="indented">Gold Coast :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 130.400 | BN-GOL_CTR |
| <span class="indented">Straddy :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 134.300 | BN-SDY_CTR |
| <span class="indented">Burnett :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 123.000 | BN-BUR_CTR |
| <span class="indented">Noosa :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 124.100 | BN-NSA_CTR |
| <span class="indented">Keppel :material-information-outline:{ title="Non-standard position"} | Brisbane Centre | 125.900 | BN-KPL_CTR |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

### CPDLC

The Primary Communication Method for INL is Voice.

[CPDLC](../../../client/cpdlc) may be used in lieu when applicable.

The CPDLC Station Code is `YINL`.

!!! tip
    Even though INL's Primary Communication Method is Voice, CPDLC may be used for Overfliers.


## Airspace

<figure markdown>
![Inverell Airspace](../assets/inl.png){ width="700" }
  <figcaption>Inverell Airspace</figcaption>
</figure>

GOL is responsible for the [BN TCU](../../../terminal/brisbane) when **BN TCU** is offline.  
KPL is responsible for the [RK TCU](../../../terminal/coral) when **RKA** is offline.  
INL is responsible for **DOS**, **GOL**, **SDY**, **BUR**, **NSA**, and **KPL** when they are offline.  

### Reclassifications
#### SU CTR
When **SU ADC** is offline, SU CTR (Class D `SFC` to `A045`) reverts to Class G, and is administered by NSA and BUR. Alternatively, NSA may provide a [top-down procedural service](../../../aerodromes/sunshinecoast) if they wish (not recommended), and this must be coordinated to BUR.

!!! tip
    If choosing *not* to provide a top down service, consider publishing an **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification. The *More ATIS* plugin has a formatted Zulu ATIS message.

#### CFS CTR
When **CFS ADC** is offline, CFS CTR (Class D `SFC` to `A045`) reverts to Class G, and is administered by MNN and INL. Alternatively, INL may provide a [top-down procedural service](../../../aerodromes/Coffs) if they wish (not recommended), and this must be coordinated to ARL(MNN).

Due to the low ceiling of CTA, when CFS ADC is offline, INL shall instruct aircraft departing into CTA to report lined up on the runway and issue an airways clearance (traffic pending) at that time.

!!! tip
    If choosing *not* to provide a top down service, consider publishing an **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification. The *More ATIS* plugin has a formatted Zulu ATIS message.

#### RK CTR
Whilst the **RKA** controller is expected to provide a [top-down service](../../../aerodromes/Rockhampton) to YBRK when **RK ADC** is offline, this is not expected of a KPL controller when both **RKA** and **RK ADC** are offline. If electing not to provide a top-down service to YBRK, the RK CTR Class D is reclassified to Class G `SFC` to `A007`, and Class E `A007` to `A045`.

!!! tip
    If choosing *not* to provide a top down service, consider publishing an **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification. The *More ATIS* plugin has a formatted Zulu ATIS message.

## Sector Responsibilities
### Inverell (INL)
INL is responsible for initial sequencing, issuing STAR Clearances, and issuing initial descent for aircraft bound for YBBN and YBCG.

### Downs (DOS)
DOS is responsible for sequencing, issuing STAR Clearances, and issuing descent for aircraft bound for YBBN and YBCG.

### Straddy (SDY)
SDY is responsible for sequencing, issuing STAR Clearances, and issuing descent for aircraft bound for YBBN and YBCG. SDY is also responsible for processing aircraft from offshore SUA to YAMB via the CENTRAL [coded clearance](#yamb-coded-clearances).

### Burnett (BUR)
BUR is responsible for final sequencing, issuing descent, and issuing STAR Clearances for Non-jets bound for YBBN and YBCG.

### Gold Coast (GOL)
GOL is responsible for final sequencing for aircraft bound for YBBN, YBCG, and issuing of STAR Clearances and descent for YBSU. GOL is also responsible for processing aircraft from offshore SUA to YAMB via the BYRON [coded clearance](#yamb-coded-clearances).

### Noosa (NSA)
NSA is responsible for facilitating YBSU traffic, including operating the Class C airspace `A045` and above. NSA is also responsible for processing aircraft from offshore SUA to YAMB via the NORTHERN [coded clearance](#yamb-coded-clearances).

### Keppel (KPL)
KPL is responsible for issuing STAR Clearances (Jets only) and initial descent for aircraft bound for YBSU, YBBN and YBCG.

### Sequencing in to YBBN
Aircraft assigned the **same runway** inbound via:  

- BLAKA and GOMOL  
- SMOKA and MORBI

Must be considered to be on the **same STAR** for sequencing purposes. That is, they must be at least **2 minutes **apart at their respective Feeder fixes.

## STAR Clearance Expectation
### Handoff
Aircraft being transferred to the following sectors shall be told to Expect STAR Clearance on handoff:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| INL | ARL | YSSY | |
| INL | GOL | YBSU | |
| KPL | BUR | YBBN, YBCG | Non-jets only |
| NSA | KPL | YBRK, YBMK | |
| KPL | KEN(SWY) | YBTL | |

### First Contact
Aircraft being transferred from the following sectors shall be given STAR Clearance on first contact:

| Transferring Sector | Receiving Sector | ADES | Notes |
| ---- | -------- | --------- | --------- |
| ARL/MNN/MDE | INL, DOS | YBBN, YBCG | |
| KEN(SWY), ISA(CVN) | KPL | YBBN, YBCG | Jets only |
| ISA(CVN) | DOS | YBBN, YBCG | |
| TSN(All) | SDY | YBBN, YBCG, YBSU | |
| KPL | BUR | YBBN, YBCG | Non-jets only |
| INL | GOL | YBSU | |
| NSA | KPL | YBRK, YBMK | |

## STAR Assignment
### PROPS
When operating a PROPS Runway Mode, Aircraft shall be assigned the appropriate 'ALPHA' STAR (or other STAR on pilot request), with the following runway selection:

| FF | Runway |
| ---- | -------- |
| BLAKA | 01R/19L |
| GOMOL | 01R/19L |
| UGTUG | 01R/**19R** |
| TEBOT | 01R/**19R** |
| MORBI | 01L/19R |
| SMOKA | 01L/19R |
| WOODY | 01L/19R |
| ENLIP | 01L/**19L** |
| Other aircraft: |
| From the NORTH and WEST | 01L/19R |
| From the SOUTH and EAST | 01R/19L |

These standard runway assignments may be modified strategically by the BAS or BFL controller.

!!! example
    During an event, the vast majority of traffic is coming from **BLAKA** and **GOMOL** feeder fixes. BAS/BFL may elect to assign 19L to **BLAKA** arrivals and 19R to **GOMOL** arrivals, to keep them strategically spearated in the TCU.

    <span class="hotline">**BFL** -> **INL**</span>: "All arrivals via GOMOL to be assigned 19R until further notice"  
    <span class="hotline">**INL** -> **BFL**</span>: "Roger, Arrivals via GOMOL to be assigned 19R" 

### SODPROPS
When operating the SODPROPS Runway Mode, aircraft via **ENLIP**, **BLAKA**, **GOMOL** and **UGTUG**, shall be assigned the **ISPON** STAR with the appropriate transition. Aircraft via other Feeder fixes may be assigned the standard STAR.

## YAMB Coded Clearances
Coded Clearances are available inbound and outbound from the AMB TMA to provided a standardised corridor for fast jet aircraft.

<figure markdown>
![YAMB Coded Clearances](img/yambcodedclearances.png){ width="700" }
  <figcaption>YAMB Coded Clearances</figcaption>
</figure>

!!! tip
    Descriptions of the coded clearances are available in the [FIHA AD2 Supps](https://ais-af.airforce.gov.au/australian-aip){target=new}.

### Inbound
Fast jet aircraft leaving offshore SUA or arriving to YAMB from the east shall be cleared via one of the following coded clearances:

| Arrival | Level | Route |
| --------- | ----------| --------- |
| Northern 4 | `F200` | MOSSI LESKO BOBED JEZZA ANKED, or<br> ANKED LESKO BOBED JEZZA ANKED |
| Central 4 | `F200` | VIRGE BOBED JEZZA ANKED |
| Byron 2 | `F200` | SEMAJ LOTMA ZANET LAGOB TUGUN |

!!! phraseology
    *CRNG21 plans to depart M649 and return to YAMB.*  
    **SDY**: "CRNG21, cleared to YAMB via VIRGE thence CENTRAL 4, maintain `F200`" 

!!! important
    The Coded Clearances are not present in vatSys, so the name of the Coded Clearance must be written in the Global Ops Field of the FDR and flight plan route amended to include all relevant tracking points.

### Outbound
Fast jet aircraft departing YAMB to the east may be cleared for a coded clearance departure by AMB ACD. ACD will update the FDR route field with the respective tracking points and write the departure name in the Global Ops Field.

The routes are shown below:

| Departure | Level | Route |
| --------- | ----------| --------- |
| Northern 3 | `F190` | BINUP MURJO BOBED LESKO MOSSI, or<br>BINUP MURJO BOBED LESKO ADNUK |
| Central 3 | `F190` | BINUP MURJO BOBED VIRGE |
| Byron 1 | `F190` | COWIE KIWEE ZANET LOTMA SEMAJ | 

## Coordination
### BN TCU
#### Airspace
The Vertical limits of the BN TCU are `SFC` to `F180`, except in BAC airspace, where it is `SFC` to `A075` in the North West, and `SFC` to `F125` in the South East.

Refer to [Brisbane TCU Airspace Division](../../../terminal/brisbane/#airspace-division) for information on airspace divisions when **BAS**, **BDN** and/or **BDS** are online.

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YBBN** or **YBCG**; and  
- Assigned a STAR; and  
- Assigned `A090` for **YBBN** arrivals; or  
- Assigned `F130` for **YBCG** arrivals

Additionally, Voiceless coordination may be used for **YBCG** arrivals tracking via **BN** and assigned `F190`.

All other aircraft coming from INL CTA must be **Heads-up** Coordinated to BN TCU prior to **20nm** from the boundary.

#### Departures
Voiceless for aircraft:

- With ADEP **YBBN**  
    - Tracking via a Procedural SID terminus; and  
    - Assigned the lower of `F180` or the `RFL`  
- With ADEP **YBCG**  
    - Tracking via **APAGI** and assigned the lower of `F120` or the `RFL`; or  
    - Tracking via **BN** and assigned the lower of `F180` or the `RFL`  
- With ADES **YBSU**  
    - Assigned the **ITIDE** STAR; and  
    - Assigned `F130`
    
All other aircraft going to INL CTA will be **Heads-up** Coordinated by BN TCU.

### Enroute
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **50nm** to boundary.

### INL Internal
As per [Standard coordination procedures](../../../controller-skills/coordination/#enr-enr), Voiceless, no changes to route or CFL within **20nm** to boundary.

That being said, it is *advised* that INL(All) give **Heads-up Coordination** to the relevant sector prior to **20nm** from the boundary in the following scenarios:

- INL to DOS for all aircraft  
- DOS to BUR, NSA, GOL and INL for all aircraft  
- SDY to NSA, GOL and INL for all aircraft  

### SU ADC
#### Airspace
SU ADC is responsible for the Class D airspace in the SU CTR `SFC` to `A045`.

Refer to [Reclassifications](#su-ctr) for operations when SU ADC is offline.

#### Departures
[Next](../../controller-skills/coordination.md#next) coordination is required from SU ADC to INL(NSA/BUR) for all aircraft **entering INL(NSA/BUR) CTA**.

The Standard Assignable level from **SU ADC** to **INL(NSA/BUR)** is:

| Aircraft | Level |
| ---- | ---- |
| All | The lower of `A040` and `RFL` |

Where possible (and no possible conflict exists), a higher level shall be assigned by INL(NSA/BUR) for high performance aircraft during next coordination.

#### Arrivals
NSA must ensure all YBSU arrivals have been assigned a STAR, unless the pilot is unable to accept one.  
YBSU arrivals shall be coordinated to **SU ADC** from NSA prior to **5 mins** from the boundary.

!!! phraseology
    <span class="hotline">**NSA** -> **SU ADC**</span>: "via ITIDE2W Arrival, JST731"  
    <span class="hotline">**SU ADC** -> **NSA**</span>: "JST731"

The Standard Assignable level from NSA to **SU ADC** is `A060`, any other level must be prior coordinated.

### RKA
#### Airspace
RKA is responsible for the airspace within the 'RK keyhole' `SFC` to `F150`.

Refer to [Reclassifications](#rk-ctr) for operations when RKA is offline.

#### Arrivals/Overfliers
Voiceless for all aircraft:

- With ADES **YBRK**; and  
- Assigned the **ABVAS** or **DADBO** STAR; and  
- Assigned `A090`

All other aircraft coming from KPL CTA must be **Heads-up** Coordinated to RKA prior to **20nm** from the boundary.

#### Departures
Voiceless for all aircraft:

- Tracking via **BUDGI** or **TARES**; and  
- Assigned the lower of `F150` or the `RFL`

All other aircraft going to KPL CTA will be **Heads-up** Coordinated by RKA.

### CFS ADC
#### Airspace
CFS ADC is responsible for the Class D airspace in the CFS CTR `SFC` to `A045`.

Refer to [Reclassifications](#cfs-ctr) for operations when CFS ADC is offline.

#### Departures
[Next](../../controller-skills/coordination.md#next) coordination is required from CFS ADC to INL for all aircraft **entering INL CTA**.

The Standard Assignable level from **CFS ADC** to **INL** is:

| Aircraft | Level |
| ---- | ---- |
| All | The lower of `A070` and `RFL` |

Where possible (and no possible conflict exists), a higher level shall be assigned by for high performance aircraft during next coordination.

#### Arrivals
YCFS arrivals shall be coordinated to **CFS ADC** from INL prior to **5 mins** from the boundary.

!!! phraseology
    <span class="hotline">**INL** -> **CFS ADC**</span>: "via IDNER, VET"  
    <span class="hotline">**CFS ADC** -> **INL**</span>: "VET"  

The Standard Assignable level from INL to **CFS ADC** is `A080`, any other level must be prior coordinated.

### OK TCU / AMB TCU
#### Airspace
By default, **OK TCU** owns the airspace within the **R654A-D** restricted areas, and **AMB TCU** owns the airspace within the **R625A-D** restricted areas, unless stated otherwise by ad-hoc release or NOTAM.

#### Departures
All aircraft from AMB/OK TCU to INL(All) require Heads-up coordination prior to the boundary. Expect this coordination to be completed a short time after the aircraft becomes airborne (pending controller workload).

!!! phraseology 
    <span class="hotline">**AMB TCU** -> **NSA**</span>: "via COWIE, BUCK03."  
    <span class="hotline">**NSA** -> **AMB TCU**</span>: "BUCK03, `F190`"  

#### Arrivals/Overfliers
All aircraft transiting from INL(All) to **OK TCU** and **AMB TCU** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **OK TCU** and **AMB TCU** are fairly ad-hoc, so there are no standard assignable levels. ENR and TCU controllers should coordinate to determine the most suitable level.

!!! phraseology
    <span class="hotline">**GOL** -> **AMB TCU**</span>: "via HUUGO, STAL13, what level can I assign?"  
    <span class="hotline">**AMB TCU** -> **GOL**</span>: "STAL13, `A090`"  
    <span class="hotline">**GOL** -> **AMB TCU**</span>: "`A090`, STAL13"   

### TSN(HWE/FLD) (Oceanic)
As per [Standard coordination procedures](../../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.

Aircraft must have their identification terminated and be instructed to make a position report on first contact with the next (procedural) sector.

!!! phraseology
    **INL**: "QFA121, identification terminated, report position to Brisbane Radio, 126.45"