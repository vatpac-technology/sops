---
  title: Brisbane TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | --------------------------------------|
| **Brisbane Approach North**    |**BAN**| **Brisbane Approach**   | **124.700**         | **BN_APP**                                   |
| Brisbane Approach South†   |BAS| Brisbane Approach   | 125.600          | BN-S_APP                                 |
| Brisbane Departures North†    |BDN| Brisbane Departures  | 133.450         | BN_DEP          |
| Brisbane Departures South†   |BDS| Brisbane Departures | 118.450          | BN-S_DEP         |
| Gold Coast Approach† |BAC| Brisbane Approach  | 123.500          | BN-C_APP       |
| Brisbane Flow†        |BFL|                |          | BN-FLW_CTR                               |

† *Non-standard positions* may only be used in accordance with [VATPAC Ratings and Controller Positions Policy](https://vatpac.org/publications/policies)

## Airspace
The Vertical limits of the BN TCU are `SFC` to `F180`, except in BAC airspace, where it is `SFC` to `A075` in the North West, and `SFC` to `F125` in the South East.

### Reclassifications
#### AF CTR
AF CTR reverts to Class G when **AF ADC** is offline, and is administered by the relevant BN TCU controller.

See also: [AF ADC Offline](#af-adc-offline).

#### CG CTR
If BN TCU elects not to provide top-down to YBCG, The CG CTR Class C airspace `SFC` to `A035` reverts to Class G when **CG ADC** is offline, and is administered by the relevant BN TCU controller.

See also: [CG ADC Offline](#cg-adc-offline).
  
### Airspace Structural Arrangements
Pursuant to Section 3 of the [VATPAC Ratings and Controller Positions Policy](https://cdn.vatpac.org/documents/policy/Controller+Positions+and+Ratings+Policy+v5.2.pdf), **“North”**/**”West”** positions shall assume the airspace of corresponding **“South”**/**”East”** positions when the latter are inactive (e.g. **BAN** assumes **BAS** airspace), and vice versa.

## Parallel Runway Operations
Refer to [Parallel Runway Separation Standards](../../separation-standards/parallelapps) for more information
### Runway Selection
Aircraft shall be assigned the following runways for arrival when PROPS are in progress:

| Aircraft tracking | Runway  |
| ----------------| --------- |
| via BLAKA   | 01R/19L     |
| via ENLIP | 01L/19R |
| via GOMOL | 01R/19L |
| via MORBI | 01L/19R |
| via SMOKA | 01L/19R |
| via TEBOT | 01R/19L |
| via UGTUG | 01R/19L |
| via WOODY | 01L/19R |
| Other aircraft: |
| From the NORTH and WEST | 01L/19R |
| From the SOUTH and EAST | 01R/19L |

### Independent Visual Approach Phraseology at Night
*"CLEARED INDEPENDENT VISUAL APPROACH RUNWAY (number), NOT BELOW (altitude) UNTIL ESTABLISHED ON THE PAPI (or GLIDEPATH)"*

## AF ADC Offline
Due to the low level of CTA (`A015`) in the AF CTR when **AF ADC** is offline, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **ABC**: "Brisbane Approach, ABC, PC12, POB 8, IFR, Taxiing YBAF for YBSU, Runway 28R"   
    **BN TCU**: "ABC, Brisbane Approach, Squawk 3601, No Reported IFR Traffic, Report Ready at the Holding Point for Airways Clearance"  
    **ABC**: "Squawk 3601, Wilco, ABC"  

    **ABC**: "ABC, Ready Runway 28R, Request clearance"  
    **BN TCU**: "ABC, Cleared to YBSU via BN, Flight Planned Route. Make Visual right turn DCT BN, Climb to A030"  
    **ABC**: "Cleared to YBSU via BN, Flight Planned Route. Make Visual right turn DCT BN, Climb to A030, ABC"

## CG ADC Offline
Due to the low level of CTA (`A035`) in the CG CTR when **CG ADC** is offline, it is best practice to give airways clearance to aircraft at the holding point, to ensure departing aircraft can have uninterrupted climb.

!!! example
    **JST446**: "Brisbane Approach, JST446, A320, IFR, Taxiing YBCG for YSSY, Runway 214"   
    **BN TCU**: "JST446, Brisbane Approach, Squawk 3601, No Reported IFR Traffic, Report Ready at the Holding Point for Airways Clearance"  
    **JST446**: "Squawk 3601, Wilco, JST446"  

    **JST446**: "JST446, Ready Runway 14, Request clearance"  
    **BN TCU**: "JST446, Cleared to YSSY via APAGI, Flight Planned Route. Climb to A060"  
    **JST446**: "Cleared to YSSY via APAGI, Flight Planned Route. Climb to A060, JST446"

## Airspace Division
The divisions of the airspace between **BAN**, **BAS**, **BDS**, **BDN**, and **BAC** change based on the Runway Mode.

!!! note
    The following diagrams do not include non BN TCU areas of responsibility such as AF CTR or CG ADC

### 01 PROPS
<figure markdown>
![01 PROPS TCU Structure](img/bn01props.png){ width="700" }
  <figcaption>01 PROPS TCU Structure</figcaption>
</figure>

### 19 PROPS
<figure markdown>
![19 PROPS TCU Structure](img/bn19props.png){ width="700" }
  <figcaption>19 PROPS TCU Structure</figcaption>
</figure>

### SODPROPS
<figure markdown>
![SODPROPS TCU Structure](img/bnsodprops.png){ width="700" }
  <figcaption>SODPROPS TCU Structure</figcaption>
</figure>

## Coordination
### Enroute
#### Departures
The Standard Assignable level for YBBN departures from BN TCU to **INL(All)** is the lower of `F180` or the `RFL`, and tracking via a **Procedural** SID terminus.  
The Standard Assignable level for YBCG departures from BN TCU to **GOL/SDY** is the lower of `F120` or the `RFL`, and tracking via **APAGI**.  
The Standard Assignable level for YBCG departures from BN TCU to **NSA/BUR/DOS** is the lower of `F180` or the `RFL`, and tracking via a **Procedural** SID terminus.  
The Standard Assignable level for YBSU arrivals from BN TCU to **NSA** is `F130`, and tracking via **ITIDE**.  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**BN TCU** -> **INL**</span>: "via GOMOL, BNZ123, with your concurrence, will be assigned F150, for my separation with ZYX"  
    <span class="hotline">**INL** -> **BN TCU**</span>: "BNZ123, concur F150"  

#### Arrivals
The Standard assignable level from INL(All) to BN TCU is:  
`A090` for YBBN arrivals, and assigned a STAR  
`F130` for YBCG arrivals via BERNI, and assigned a STAR  

All other aircraft must be voice coordinated to BN TCU.

### BN ADC
#### Auto Release
'Next' coordination is **not** required from BN ADC for aircraft that are:   
  a) Departing from a runway nominated on the ATIS (except during SODPROPS*); and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID  

!!! example
    <span class="hotline">**BN ADC** -> **BN TCU**</span>: "Next, ABC, runway 19L"  
    <span class="hotline">**BN TCU** -> **BN ADC**</span>: "ABC, Heading 030, Unrestricted"  
    <span class="hotline">**BN ADC** -> **BN TCU**</span>: "Heading 030, ABC"

The Standard Assignable level from BN ADC to BN TCU is:  
For Jets: `A060`  
For Non-Jets: The lower of `A040` or the `RFL`

### CG ADC
#### Auto Release
'Next' coordination is **not** required fro CG ADC for aircraft that are:   
  a) Departing from a runway nominated on the ATIS; and  
  b) Assigned the standard assignable level; and  
  c) Assigned a **Procedural** SID

!!! example
    <span class="hotline">**CG ADC** -> **BAC**</span>: "Next, CBN, runway 14"  
    <span class="hotline">**BAC** -> **CG ADC**</span>: "CBN, heading 030, unrestricted"  
    <span class="hotline">**CG ADC** -> **BAC**</span>: "Heading 030, CBN"  

The BN TCU controller can suspend/resume Auto Release at any time, with the concurrence of **CG ADC**.

The Standard Assignable level from CG ADC to BN TCU is:  
For Jets: `A060`  
For Non-Jets: The lower of `A060` or the `RFL`

### AF ADC
### Departures
When aircraft planned via a CTA departure are ready for takeoff and expected to depart imminently, **AF ADC** shall seek release of the aircraft through a 'Next' call.

!!! example
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "Next, XMM, Runway 10L"  
    <span class="hotline">**BN TCU** -> **AF ADC**</span>: "XMM, Unrestricted"  
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "XMM"

The Standard Assignable level from AF ADC to BN TCU is the lower of `A040` or the `RFL`, any other level must be prior coordinated.

### Arrivals/Overfliers
BN TCU will heads-up coordinate arrivals/overfliers from Class C to AF ADC prior to **5 mins** from the boundary.  
IFR aircraft will be cleared for the coordinated approach (Instrument or Visual) prior to handoff to AF ADC, unless AF ADC nominates a restriction.  
VFR aircraft require a level readback.

!!! example
    <span class="hotline">**BN TCU** -> **AF ADC**</span>: "via TVT for the visual approach, UJE"  
    <span class="hotline">**AF ADC** -> **BN TCU**</span>: "UJE, visual approach"

### AMB TCU

#### Departures
Departures from YAMB in to BN TCU Class C will be coordinated at taxi, and will be requesting a level.

!!! example
    <span class="coldline">**AMB TCU** -> **BN TCU**</span>: "Taxi, FALC22 for YSRI via GOMOL, Requesting F340"  
    <span class="coldline">**BN TCU** -> **AMB TCU**</span>: "FALC22, F180"  
    <span class="coldline">**AMB TCU** -> **BN TCU**</span>: "F180, FALC22"  

#### Arrivals/Overfliers
All aircraft transiting from BN TCU to **AMB TCU** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **AMB TCU** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the BN TCU and **AMB TCU** controller agree on.

!!! example
    <span class="hotline">**BN TCU** -> **AMB TCU**</span>: "via WACKO, STAL13, what level can I assign?"  
    <span class="hotline">**AMB TCU** -> **BN TCU**</span>: "STAL13, A050"  
    <span class="hotline">**BN TCU** -> **AMB TCU**</span>: "A050, STAL13"  

### SU ADC
BN TCU Class G shares a tiny border with **SU ADC**, however there are no SIDs, STARs, or airways through this gap. The only possible way for an aircraft to directly enter SU ADC airspace from BN TCU's jurisdiction, is from Class G, and as such, no coordination is required to **SU ADC**. However, ensure the aircraft is transferred to the ADC at least **10nm** prior to the boundary, to facilitate their airways clearance.

<figure markdown>
![BN TCU / SU ADC Border](img/subntcu.png){ width="700" }
  <figcaption>BN TCU / SU ADC Border</figcaption>
</figure>

**SU ADC** coordination for arrivals and departures via the SID/STAR is handled by INL(NSA).
