---
  title: Melbourne TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login ID              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Melbourne Approach East**    |**MAE**| **Melbourne Approach**   | **132.000**         | **ML_APP**                                   |
| Melbourne Departures North†    |MDN| Melbourne Departures  | 118.900         | ML_DEP          |
| Melbourne Departures South†   |MDS| Melbourne Departures | 129.400          | ML-S_DEP         |
| Melbourne Flow†        |MFL|                |          | ML_FMP                             |

† *Non-standard positions* may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}

## Airspace
The Vertical limits of the ML TCU are `SFC` to `F245`.  

### Reclassifications
#### MB CTR
MB CTR reverts to Class G when **MB ADC** is offline, and is administered by the relevant ML TCU controller.

See also: [MB ADC Offline](#mb-adc-offline).

#### AV CTR
AV CTR Class D `SFC` to `A007` reverts to Class G and `A007` to `A025` to Class E when **AV ADC** is offline, and is administered by the relevant ML TCU controller.

See also: [AV ADC Offline](#av-adc-offline).

!!! tip
    When AV ADC is not online, consider publishing an **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification. The *More ATIS* plugin has a formatted Zulu ATIS message.

### Airspace Division
The divisions of the airspace between **MAE**, **MDN**, and **MDS** change based on the Runway Mode.

!!! note
    The following diagrams do not include non ML TCU areas of responsibility such as MB CTR or AV ADC

#### 09
<figure markdown>
![09 TCU Structure](img/ML09annotated.png){ width="700" }
  <figcaption>09 TCU Structure</figcaption>
</figure>

#### 09A16D
<figure markdown>
![09A16D TCU Structure](img/ML09A16Dannotated.png){ width="700" }
  <figcaption>09A16D TCU Structure</figcaption>
</figure>

#### 16 / 16A27D
<figure markdown>
![16 / 16A27D TCU Structure](img/ML16annotated.png){ width="700" }
  <figcaption>16 / 16A27D TCU Structure</figcaption>
</figure>

#### 27 / 27AD34D
<figure markdown>
![27 / 27AD34D TCU Structure](img/ML27annotated.png){ width="700" }
  <figcaption>27 / 27AD34D TCU Structure</figcaption>
</figure>

#### 34
<figure markdown>
![34 TCU Structure](img/ML34annotated.png){ width="700" }
  <figcaption>34 TCU Structure</figcaption>
</figure>

## Departure Procedures
### ML (RADAR) SID
The **ML (RADAR) SID** is used for all non-jet IFR departures (and certain jet aircraft) from YMML.  Unlike at other aerodromes, **ML ADC** does *not* need to coordinate these departures with a 'Next' call, provided they are assigned the standard assignable level and a [Standard Assignable Heading](#standard-assignable-departure-headings).

## Arrival Procedures
### Level Assignment
When assigning levels on descent to aircraft, remember that you will not receive "Next" Coordination on aircraft assigned Standard Assignable Levels (`A050` for most aircraft), meaning an aircraft could depart at any time without prior warning and climb to `A050`. To maintain separation assurance between arrivals and departures, do not assign below `A060` to arriving aircraft until they are clear of the active runway's departure path.

!!! example
    With RWY 34 in use for arrivals and RWY 27 in use for departures, aircraft inbound on the ARBEY STAR should be assigned no lower than `A060` until established south of the RWY 27 departure track.

To avoid conflicting with published departure procedures, aircraft not cleared via a STAR should be issued a requirement to reach `A090` by 20DME.
### YMEN Arrivals
IFR YMEN Arrivals shall be cleared via the following arrival gates:  
Runway 26: `MONTY`  
Runway 35: `MONTY`  
Runway 17: `5NM FINAL`  
Runway 08: `5NM FINAL`  

VFR YMEN Arrivals from ML TCU shall be cleared via any of the following arrival gates:  

- KAO
- YYN
- DSN 
- APL 
- SNP
- WES

## EN ADC Offline
!!! tip
    When EN ADC is offline, consider publishing an **ATIS Zulu** for the aerodrome, to inform pilots about the airspace reclassification. The *More ATIS* plugin has a formatted Zulu ATIS message.

### Arrivals
The class C airspace surrounding YMEN extends to `SFC`.  This means that aircraft conducting approaches will remain inside controlled airspace until they land (and in the event of a go around).  These aircraft should be cleared for an appropriate approach, advised of any traffic taxiing at YMEN, and instructed to *'report clear of the runway'*.  The missed approach path must be protected until the aircraft reports clear.

!!! example
    **ML TCU:** "SH490, cleared ILS Runway 26 approach, traffic taxiing for the holding point is UJA, an Aero Commander, report clear of the runway"  
    **SH490:** "Cleared ILS Runway 26, copy UJA, SH490"  

    **SH490:** "SH490, clear of the runway, Essendon, cancel SARWATCH"  
    **ML TCU:** "SH490, Essendon SARWATCH terminated"

### Departures
Essendon has unique procedures due to its position in the ML CTR, with controlled airspace to the ground.  Departing aircraft will request airways clearance and engine start while on the bay and ML TCU will provide current weather conditions, expected runway for departure, and clearance. On completion of the readback, aircraft should be instructed to *'report taxiing to runway XX'*.

!!! example
    **FDK**: "Melbourne Approach, FDK, YMEN for YSHT, request clearance and engine start"    
    **ML TCU**: "FDK, Melbourne Approach, wind 290 degrees 4 knots, QNH 1017, cleared to YSHT via MNG, flight planned route, visual departure, climb to A040, squawk 4423, expect runway 35"  
    **FDK**: "QNH 1017, cleared to YSHT via MNG, flight planned route, visual departure, climb to A040, squawk 4423, FDK"  
    **ML TCU**: "FDK, start approved, report taxiing for runway 35"  
    **FDK**: "Start approved, FDK"

When the aircraft reports taxiing, issue a traffic statement and instruct them to report at the holding point for departure instructions.
!!! example
    **FDK**: "FDK, taxiing runway 35"  
    **ML TCU**: "FDK, traffic is CBN, a Cherokee, 5nm final runway 35, report at the holding point for departure instructions"  
    **FDK**: "Copy CBN, wilco, FDK"

Once the aircraft is ready for departure and no conflict exists in your airspace, issue any relevant departure instructions (assigned heading, visual turns, etc).  If a departure is not yet available, instruct the pilot to hold on the ground and indicate the reason for the delay.
!!! example
    **FDK**: "FDK, ready runway 35"  
    **ML TCU**: "FDK, hold at the holding point, short delay due inbound aircraft"  
    **FDK**: "Hold at the holding point, FDK"  

    **ML TCU**: "FDK, make right turn, report airborne"  
    **FDK**: "Make right turn, FDK"

## AV ADC Offline
### Arrivals
Due to the low level of CTA above Avalon, aircraft conducting approaches will commence the approach inside controlled airspace and leave CTA on descent.  If the aircraft goes around, they will re-enter controlled airspace.  These aircraft should be cleared to leave controlled airspace descending via an appropriate approach and instructed to *'report clear of the runway'*.  The missed approach path must be protected until the aircraft reports clear.

!!! note
    A clearance to conduct an instrument approach constitutes a clearance to carry out the published missed approach.  As a result, there is no need to issue a clearance to re-enter controlled airspace in the event the aircraft goes around.

!!! example
    **ML TCU:** "JST607, leave controlled airspace descending via the ILS Runway 18 approach, no reported IFR traffic, report clear of the runway"  
    **JST607:** "Leave controlled airspace descending via the ILS Runway 18 approach, JST607"  

    **JST607:** "JST607, clear of the runway, Avalon, cancel SARWATCH"  
    **ML TCU:** "JST607, Avalon SARWATCH terminated"

### Departures
Departing aircraft will require an airways clearance on the ground, due to the low level of CTA. Aircraft should report taxiing to the TCU controller, who will issue a squawk code and traffic statement. These aircraft should be instructed to report at the holding point, where airways clearance will be issued.

!!! example
    **AM318**: "Melbourne Approach, AM318, King Air, POB 2, IFR, taxiing YMAV runway 18 for YMEN"  
    **ML TCU**: "AM318, Melbourne Approach, squawk 3542, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **AM318**: "Squawk 3542, wilco, AM318"  
    
    **AM318**: "AM318, ready runway 18"  
    **ML TCU**: "AM318, cleared to YMEN direct, AV5 departure, climb via SID to A040"  
    **AM318**: "Cleared to YMEN direct, AV5 departure, climb via SID to A040, AM318"  
    **ML TCU**: "AM318, assigned heading left 020, report airborne"  
    **AM318**: "Assigned left 020, wilco, AM318"

## MB ADC Offline
### Arrivals
IFR aircraft cruising inside CTA will generally commence an instrument approach from within controlled airspace and leave CTA on descent.  The missed approach procedure will keep these aircraft outside controlled airspace, so does not need to be protected by the TCU controller.  Clear these aircraft to leave CTA descending via an appropriate approach.

!!! example
    **ML TCU:** "OFX, Leave controlled airspace descending via the RNP Runway 17L approach, no reported IFR traffic"  
    **OFX:** "Leave controlled airspace descending via the RNP Runway 17L approach, OFX"

### Departures
Due to the low level of CTA surrounding YMMB, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **AAC:** "Melbourne Approach, AAC, PC12, POB 7, IFR, taxiing YMMB for YBLT, runway 35L"  
    **ML TCU:** "AAC, Melbourne Approach, squawk 4301, no reported IFR traffic, report ready at the holding point for airways clearance"  
    **AAC:** "Squawk 4301, wilco, AAC" 

    **AAC:** "AAC, ready runway 35L"  
    **ML TCU:** "AAC, cleared to YBLT via SAMIG, flight planned route, climb to A040"  
    **AAC:** "Cleared to YBLT via SAMIG, flight planned route, climb to A040, AAC"

## Flow
The tables below give an estimated time **in minutes** from the **Feeder Fix** to the **Threshold**, which can be used to plan sequencing actions within the TCU.

The times assume there is *Nil wind*. The data is for **Jets**, although there are **Non-Jet** adjustments listed below.

| Feeder Fix | 09  | 16  | 27  | 34  |
| ---------- | --- | --- | --- | --- |
| BOYSE†     | 16  | 13  | 11  | 14  |
| LIZZI      | 15  | 12  | 10^ | 13  |
| WAREN      | 16  | 13  | 9^  | 10^ |
| PORTS      | 11^ | -   | -   | 7^  |
| WENDY      | 11^ | 17  | 15  | 12  |
| ARBEY      | 11^ | 9^  | 12  | 13  |

- †BOYSE STAR only available to Non-Jets  
- 09A/16A IAF - Threshold is **4 minutes**  
- 27A/34A IAF - Threshold is **3.5 minutes**  
- Add **1 minute** for aircraft assigned a reduced speed, Except ^  
- For **Non-Jets** (except **DH8D**);
    - Add **2 minutes** (Except ^)
    - Add only **1 minute** for ^
- Subtract **1 minute** for MX or CSR  
- Subtract **1 minute** for aircraft on the Runway 34 **Victor** STAR  
- Subtract **2 minutes** for aircraft on the Runway 16 **Mike/Papa** STARs  

!!! note
    The adjustments above are **cumulative**. For example, an aircraft with a **MX** on the **16M STAR**, would have **3 minutes** subtracted in total

## Coordination

### Enroute
#### Departures
Voiceless to all surrounding Enroute sectors for all aircraft:
 
- Tracking via a Procedural SID terminus; and  
- Assigned the lower of `F240` or the `RFL`

All other aircraft going to Enroute CTA must be **Heads-up** Coordinated by ML TCU prior to the boundary.

!!! example
    <span class="hotline">**ML TCU** -> **YWE**</span>: "QFA420, with your concurrence, will be assigned F190, for my separation with QLK52D"  
    <span class="hotline">**YWE** -> **ML TCU**</span>: "QFA420, concur F190"  

#### Arrivals
Voiceless for all aircraft:

- With ADES **YMML**; and  
- Assigned a STAR; and  
- Assigned `A090`

All other aircraft coming from Enroute CTA will be **Heads-up** Coordinated to ML TCU.

### ML ADC
#### Auto Release
!!! important
    Melbourne utilises auto release for all **Procedural** SIDs and the **ML (RADAR)** SID provided aircraft are assigned the Standard Assignable Level and a [Standard Assignable Heading](#standard-assignable-departure-headings).

'Next' coordination is **not** required for aircraft that are:  

- Assigned a **Procedural** SID  
    - Departing from a runway nominated on the ATIS; and  
    - Assigned `A050`  
- Assigned the **ML (RADAR)** SID  
    - Departing from a runway nominated on the ATIS; and  
    - Assigned `A050`; and  
    - Assigned a [Standard Assignable Heading](#standard-assignable-departure-headings)  
- Assigned the **ISPEG** SID  
    - Departing from Runway 16 during the 16A27D Runway Mode; and  
    - Assigned `A050`; and  
    - Tracking via **MNG**, **NONIX**, **DOSEL**, **KEPPA**, **NEVIS** or **ESDIG**

Any aircraft that don't meet these criteria will be coordinated to ML TCU with a "Next" Call.  

!!! example
    <span class="hotline">**ML ADC** -> **ML TCU**</span>: "Next, CYF, runway 34"  
    <span class="hotline">**ML TCU** -> **ML ADC**</span>: "CYF, track extended centreline, unrestricted"  
    <span class="hotline">**ML ADC** -> **ML TCU**</span>: "Track extended centreline, CYF"

##### Standard Assignable Departure Headings
The following Standard Assignable Headings may be used for aircraft assigned the ML (RADAR) SID, depending on their direction of travel.

| Runway | W | NE | SE | S |
| ---- | ---- | ---- | ---- | ---- |
| 09* | - | - | - | - |
| 16** | 290 | 290 | 160 | 260 |
| 27 | 320 | 290 | 260 | 260 |
| 34 | 340 | 340 | 340 | 260 |

*When Runway 09 is in use for departures, ML TCU shall nominate a heading to ML ADC for use as a standard assignable heading.

**When Runway 09 is in use for arrivals, all Runway 16 departures shall be assigned heading 160.

### EN ADC
#### Airspace
EN ADC is responsible for the Class C airspace shown below, `SFC` to `A020`.

<figure markdown>
![EN ADC Airspace](img/enadc.png){ width="700" }
  <figcaption>EN ADC Airspace</figcaption>
</figure>

#### Start Clearance
When an aircraft requests start clearance, the EN SMC controller shall coordinate with ML TCU to obtain the start clearance.

#### Departures
Essendon departures that will not enter ML TCU Class C airspace are not required to be coordinated.

All aircraft departing into Class C must be coordinated to ML TCU with a "Next" Call

!!! example
    <span class="hotline">**EN ADC** -> **ML TCU**</span>: "Next, FD318"  
    <span class="hotline">**ML TCU** -> **EN ADC**</span>: "FD318, heading 330, unrestricted"  
    <span class="hotline">**EN ADC** -> **ML TCU**</span>: "Heading 330, FD318"

The Standard Assignable level from EN ADC to ML TCU is the lower of `A030` or the `RFL`, any other level must be prior coordinated.

#### Arrivals/Overfliers
ML TCU will heads-up coordinate arrivals/overfliers from Class C to EN ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to EN ADC, unless EN ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example 
    <span class="hotline">**ML TCU** -> **EN ADC**</span>: "via KAO, KHU"  
    <span class="hotline">**EN ADC** -> **ML TCU**</span>: "KHU, A015"

!!! Note
    For aircraft not tracking via an Arrival Gate (ML TCU shall clear aircraft for approach via the appropriate arrival gate:), ML TCU is required to coordinate descent of aircraft into EN ADC airspace.

When “The Coffin” is released, ML TCU is required to coordinate any use of Runway 27 to EN ADC prior to use.

### AV ADC
#### Airspace
AV ADC is responsible for the Class D Airspace within the AV CTR `SFC` to `A025`.

Refer to [Reclassifications](#av-ctr) for operations when AV ADC is offline.

#### Departures
'Next' coordination is **not** required from AV ADC for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; or  
  b) Assigned the standard assignable level; or  
  c) Assigned a **Procedural** SID

Any aircraft that don't meet these criteria will be coordinated to ML TCU with a "Next" Call

!!! example
    <span class="hotline">**AV ADC** -> **MDS**</span>: "Next, UJI, Runway 18"  
    <span class="hotline">**MDS** -> **AV ADC**</span>: "UJI, left 030, unrestricted"  
    <span class="hotline">**AV ADC** -> **MDS**</span>: "Left 030, UJI"

The Standard Assignable level from AV ADC to ML TCU is the lower of `A040` or the `RFL`.

#### Arrivals
ML TCU will heads-up coordinate arrivals/overfliers from CTA to AV ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to AV ADC, unless AV ADC nominates a restriction.  
VFR aircraft will have their control services terminated upon leaving controlled airspace, and instructed to contact AV ADC for onwards clearance.

!!! example
    <span class="hotline">**MDS** -> **AV ADC**</span>: "via TEMPL for the ILS-Y 18, JST631"  
    <span class="hotline">**AV ADC** -> **MDS**</span>: "JST631, ILS-Y 18"  

### MB ADC
#### Airspace
MB ADC is responsible for the Class D airspace in the MB CTR `SFC` to `A025`.

Refer to [Reclassifications](#mb-ctr) for operations when MB ADC is offline.

#### Departures
**MB ADC** will issue airways clearances for all departures planned into the overlying Class C airspace. The Standard Assignable level from MB ADC to ML TCU is `A050` or `RFL` if lower.

Autorelease is not in effect at YMMB and all departures into Class C airspace require a 'Next' call. Consider the current traffic picture and provide a release when able.

!!! example
    <span class="hotline">**MB ADC** -> **MDS**</span>: "Next, SGE"  
    <span class="hotline">**MDS** -> **MB ADC**</span>: "SGE, unrestricted"

#### Arrivals/Overfliers
ML TCU will heads-up coordinate arrivals/overfliers from Class C to MB ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared to **leave and re-enter controlled airspace** via the coordinated approach (Instrument or Visual) prior to handoff to MB ADC, unless MB ADC nominates a restriction.  
VFR aircraft will have their control services terminated passing `A025` on descent, and instructed to contact MB ADC for onwards clearance.

!!! example
    <span class="hotline">**MDS** -> **MB ADC**</span>: "To the west, PLE, for the NDB-A"  
    <span class="hotline">**MB ADC** -> **MDS**</span>: "PLE, NDB-A"

!!! tip
    Ensure the aircraft's FDR is up-to-date in order to give **MB ADC** maximum situational awareness of the traffic picture. (eg. if the aircraft is doing the RNP approach, ensure the FDR has been rerouted via the appropriate points)