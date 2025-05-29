---
  title: Enroute
---

--8<-- "includes/abbreviations.md"

## Positions

| Name                    | ID |Callsign         | Frequency | Login ID    |
| ----------------------- | ---- | --------- | ---------------- | --------- |
| **Port Moresby Centre** | **AYPM** | **Moresby Control** | **123.400** | **AYPM_CTR** |
<!--- | Future HF frequency | -->

!!! warning "Important"
    VHF coverage is limited in the east of the sector, and in remote areas at lower levels.

## Airspace
<figure markdown>
![AYPM Airspace](img/aypm.png){ width="700" }
  <figcaption>AYPM Airspace</figcaption>
</figure>

Airspace `SFC` to `BCTA` is considered Class F.

Refer to the [PNG Local instructions](../) for more information about Class F operations.

### Reclassifications
#### AYNZ ADC
When **AYNZ ADC** is offline, AYNZ CTR (Class C `SFC` to `A060`) is reclassified as Class F, and is administed by AYPM. Alternatively, AYPM may provide a [top-down procedural service](../Nadzab) if they wish.

#### Class F Aerodromes
When **AYGA ADC**, **AYMD ADC**, **AYMH ADC**, **AYTK ADC** are offline, the [ATZ](../#aerodrome-traffic-zones)'s of their respective aerodromes are inactive. The airspace remains Class F.
<!--- ## Extending --->
## CPDLC ##
The Primary Communication Method for AYPM west of 150°E is Voice, east of 150°E is [CPDLC](../../../client/cpdlc).

The CPDLC Station code is `AYPM`.

Both CPDLC or Voice may be used in lieu when applicable.
<!---## Sector Responsibilities

### Sequencing

## Runway Modes --->
## Surveillance Coverage
Limited surveillance coverage exists throughout the entire sector at lower levels, and beyond 200NM AYPY.  [Procedural Standards](../../../separation-standards/procedural/) must be implemented **prior** to losing surveillance coverage.

## STAR Clearances
AYPM is responsible for issuing STAR clearances for all aicraft inbound to AYPY. Aircraft shall be given STAR Clearance after first being advised "STAR CLEARANCE AVAILABLE".
<!--- ## STAR Clearance Expectation--->
## Coordination
### AYPY TCU
#### Airspace
The vertical limits of the AYPY TCU are `SFC`–`A150`.

#### Departures
Voiceless for aircraft:

- Tracking via a Procedural SID terminus^; and
- Assigned the lower of `A150` or the `RFL`.

All other aircraft going to AYPM CTA must be **Heads-up** Coordinated by AYPYA prior to the boundary.

#### Arrivals
Voiceless coordination for all aircraft:

- With ADES **AYPY**; and  
- Assigned a STAR; and  
- Assigned `A140`

All other aircraft coming from AYPM CTA must be **Heads-up** coordinated to AYPYA.

### AYNZ TCU
#### Airspace
The vertical limits of the AYNZ TCU are `SFC`–`F245`. AYNZ ADC is responsible for the Class C Airspace within the AYNZ CTR `SFC` to `A060`.

Refer to [Reclassifications](#aynz-adc) for operations when AYNZ ADC is offline.

#### Departures
All aircraft going to AYPM CTA must be **Heads-up** Coordinated by AYNZA prior to the boundary.

The Standard Assignable Level from **AYNZA** to **AYPM** is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `F240` and `RFL` |

#### Arrivals
AYPM will **heads-up** coordinate all arrivals/overfliers to AYNZA.

!!! phraseology
    <span class="hotline">**AYPM** -> **AYNZA**</span>: "Via WESTERN GPS Arrival, TOK8409.”  
    <span class="hotline">**AYNZA** -> **AYPM**</span>: "TOK8409."
	
The Standard Assignable level from AYPM to AYNZA is `F250`. Any other level must be prior coordinated.

### Class F Aerodromes
#### Departures and Arrivals
As per [Standard coordination procedures](../../controller-skills/coordination/#octa-coordination), coordination between ADC and AYPM is **not required**. However, a **5 minute** change parameter applies to any aircraft that change level, route, or taxi within **5 minutes** of the next sector's airspace.

#### Overfliers
As per [Standard coordination procedures](../../controller-skills/coordination/#octa-coordination), coordination between ADC and AYPM is **not required**. However, a **5 minute** change parameter applies to any aircraft that change level, route, or taxi within **5 minutes** of the next sector's airspace.

IFR aircraft may either be handed off to the ADC frequency by AYPM, or held on the AYPM frequency following coordination if there is no relevant traffic.

!!! phraseology
    *DEF tracking YABAL H409 PAPTI*  
    <span class="hotline">**AYPM** -> **AYMH ADC**</span>: "via LEMER, DEF, any traffic or frequency requirements?."  
    <span class="hotline">**AYMH ADC** -> **AYPM**</span>: "DEF, No reported IFR traffic, no frequency requirements."  
    AYPM CTR will put *"AYMH NFR NIT"* in the label data, and the aircraft will remain on the ENR frequency.

### International (ISA(ARA)/KEN(WIL))
As per [Standard coordination procedures](../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.
    
### Pacific Oceanic (TSN(COL)/KZAK)
As per [Standard coordination procedures](../../controller-skills/coordination/#pacific-units), Voiceless, no changes to route or CFL within **15 mins** to boundary.

Aircraft must have their identification terminated and be instructed to make a position report on first contact with the next (procedural) sector.

!!! phraseology
    **AYPM**: "SOL712, identification terminated, report position to Brisbane Radio, 124.65"

### International (WAAF)
As per [Standard coordination procedures](../../controller-skills/coordination/#other-units), Heads-up Coordination required for all aircraft prior to **30 mins** from boundary.

!!! phraseology
    <span class="coldline">**AYPM** -> **WAAF_CTR**</span>: "Estimate, ANG8, KADAB time 59, F380"  
    <span class="coldline">**WAAF_CTR** -> **AYPM**</span>: "ANG8, F380"

## Charts
!!! abstract "Reference"
    Charts can be found on the [PNG AIP Flight Supplement](https://www.niuskypacific.com.pg/aip-flight-supplements/){target=new}.
