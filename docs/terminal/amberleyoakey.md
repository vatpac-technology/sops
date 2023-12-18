---
  title: Amberley / Oakey TCU
---

--8<-- "includes/abbreviations.md"


--8<-- "includes/abbreviations.md"

## Positions

| Name               | Callsign       | Frequency        | Login Identifier              |
| ------------------ | -------------- | ---------------- | --------------------------------------|
| Amberley TCU   | Amberley Approach   | 126.200        | AM_APP                                   |
| Oakey TCU   | Oakey Approach | 125.400        | OK_APP                                   |

AM APP is expected to extend to OK APP when they are offline. No frequency cross coupling is required. 


## Airspace
### AM TCU
#### Restricted Areas
By default, AM APP owns all of the R625 Restricted Areas, as detailed below:

- R625A (`A015`-`A085`)  
- R625B (`A025`-`A085`)  
- R625C (`A045`-`A085`)  
- R625D (`A085`-`F210`)  

### Optional, as required
AM APP can negotiate further airspace releases from surrounding ENR sectors to facilitate planned military operations of the following Restricted Areas:

- R650A (`A050`-`A100`)  
- R650B (`A050`-`F600`)  
- R662A (`A050`-`F600`)  
- R662B (`A050`-`F600`)  
- R671A (`F125`-`F245`)  
- R671B (`F240`-`F600`)

!!! note
    See [VATPAC Notams](https://vatpac.org/publications/notam){target=new} for active NOTAMs which may affect military operations.

#### Diagram

<figure markdown>
![AM TCU Airspace Diagram](img/amtcu.png){ width="952" }
  <figcaption>AM TCU Airspace Diagram</figcaption>
</figure>

### AM ADC
AM ADC owns the Class C airspace in the AM CTR within 10nm of the YAMB ARP from `SFC` to `A015`. 

### OK TCU
#### Restricted Areas
By Default OK APP owns all of the R625 Restricted Areas, detailed below:

- R654A (`SFC`-`A065`)  
- R6545B (`SFC`-`A065`)  
- R654C (`A065`-`F125`)  
- R654D (`A065`-`F125`)  

#### Diagram

<figure markdown>
![OK TCU Airspace Diagram](img/oktcu.png){ width="1060" }
  <figcaption>OK TCU Airspace Diagram</figcaption>
</figure>

### OK ADC
OK ADC owns the Class C airspace within 5 DME of the OK VOR from `SFC` to `A025`. This airspace is designed to facilitate circuit traffic.


## YAMB Aerodrome
### Coded Departures (Fast Jets)
Visual Departures are commonly requested by high performance military jets, and often processed in the form of a coded departure (e.g. BYRON7 departure), which can be found in the AD2 Sups Page for Amberley. These coded departures provide a corridor with altitude constraints to join the Military Training Areas east of Brisbane avoiding civilian traffic inbound to Brisbane. 


Aircraft will make a visual departure in the circuit direction and fly overhead YAMB to begin tracking for their initial waypoint.

!!! example
    WOLF03 was assiged the BYRON7 departure with their intial clearance.  
    **AM ADC**: "WOLF03, make left turn, reach `F190` by COWIE, cleared for takeoff"  
    **WOLF03**: "Make left turn, reach `F190` by COWIE, cleared for takeoff, WOLF03"  

| Departure | Initial Constraint | Route |
| --------- | ----------| --------- |
| Northern 1 | `F190` at BINUP | BINUP MURJO BOBED LESKO MOSSI/ADNUK (Transition) |
| Central 1 | `F190` at BINUP | BINUP MURJO BOBED VIRGE |
| Byron 7 | `F190` at BINUP | COWIE KIWEE ZANET LOTMA SEMAJ |

!!! note
    Charts for the Coded Departures may be in YAMB AD2 Supplements 6.2.25.11 available here: [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

!!! note
    AM ACD will record the name of the coded departure in the Global Ops Field of the FDR and amend the flight plan route with all necessary tracking points.

## Charts
!!! note
    Additional charts to the AIP may be found in the RAAF TERMA document, available towards the bottom of [RAAF AIP page](https://ais-af.airforce.gov.au/australian-aip){target=new}

## Coordination
### AM/OK ADC

'Next' coordination is required from AM ADC to AM TCU for all aircraft.

!!! example
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Next, ASY01, runway 33"  
    <span class="hotline">**AM TCU** -> **AM ADC**</span>: "ASY01, Assigned Heading Right 030, unrestricted"  
    <span class="hotline">**AM ADC** -> **AM TCU**</span>: "Assigned Heading Heading Right 030, ASY01"  

### INL / BN TCU
#### Departures
All aircraft from AM/OK TCU to INL(All) and BN TCU require Heads-up coordination prior to the boundary, however, as soon as practical (when is the aircraft becomes airborne) is prefered.

The Standard Assignable Level from  **AM ADC** to **AM TCU** is:  
a) The Lower of `F180` or `RFL` for Aircraft assigned via Procedural or RNAV SID.  
b) `F190` for Aircraft assigned a Coded Departure.

The Standard Assignable from **OK ADC** to **OK TCU** is the lower of `F120` or `RFL`.

!!! example
    <span class="hotline">**AM TCU** -> **BN TCU**</span>: "via BN, DRGN02"  
    <span class="hotline">**BN TCU** -> **AM TCU**</span>: "DRGN02, `F180`"  

!!! example
    BUCK03 is assigned the BYRON 7 coded departure. 
    <span class="hotline">**AM TCU** -> **NSA**</span>: "via COWIE, BUCK3."  
    <span class="hotline">**NSA** -> **AM TCU**</span>: "BUCK03, `F190`"  

#### Arrivals/Overlfies
All aircraft transiting from GOL/DOS/BUR to **AM TCU** and **OK TCU** must be heads-up coordinated prior to **20nm** from the boundary and aircraft from **BN TCU** to **AM TCU** only prior to the boundary. Operations within **AM TCU** are fairly ad-hoc, so there are no standard assignable levels. GOL/DOS/BUR and **AM TCU**/**OK TCU** controller must agree on a suitable level during coordination.

!!! example
    <span class="hotline">**GOL** -> **AM TCU**</span>: "via HUUGO, PUMA11, will be assigned A090"  
    <span class="hotline">**AM TCU** -> **GOL**</span>: "PUMA11, A090"  
