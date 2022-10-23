---
  title: Coordination
---

--8<-- "includes/abbreviations.md"
# BN TCU / ENR
#### Departures
Voiceless coordination is in place from BN TCU to **INL** (and subsectors) for aircraft:  
**Departing YBBN** - Assigned the lower of `F180` or `RFL`  
**Departing YBCG to the North** - Assigned the lower of `F180` or `RFL`  
**Departing YBCG any other direction** - Assigned the lower of `F120` or `RFL`  
**Arriving YBSU via ITIDE** - Assigned `F130`

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    **BN TCU** -> **INL**: "via GOMOL, BNZ123, with your concurrence, will be assigned F150, for my separation with ZYX"  
    **INL** -> **BN TCU**: "BNZ123, concur F150"  

#### Arrivals
The Standard assignable levels from **INL** (and subsectors) to BN TCU are as follows:  
YBBN Arrivals: `A090`  
YBCG Arrivals: `F130`

# BN TCU / BN ADC
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned the standard assignable level.

Any aircraft that don't meet these criteria must be coordinated to BN TCU with a "Next" Call.

"Next" Coordination is a procedure where the BN ADC controller gives a heads-up to the BN TCU controller about an impending departure. The BN TCU controller will respond by assigning a heading to the aircraft, for the BN ADC controller to pass on with their takeoff clearance.

!!! example
    **BN ADC** -> **BN TCU**: "Next, ABC"  
    **BN TCU** -> **BN ADC**: "ABC, Heading 030"  
    **BN ADC** -> **BN TCU**: "Heading 030, ABC"  
    **BN ADC** -> **ABC**: "ABC, Assigned heading right 030, Runway 34R, Cleared for Takeoff"  
    **ABC** -> **BN ADC**: "Right heading 030, Runway 34R, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

# BN TCU / AF TWR
#### Departures

Aircraft departing YBAF in to BN TCU Class C will be coordinated from **AF TWR** at Taxi. Aircraft will need to be passed airways clearances to **AF TWR** at this point, to be relayed to the aircraft.

The Standard assignable levels for YBAF departures is the lower of `A040` or the `RFL`.

!!! example
    **AF TWR** -> **BN TCU**: "Taxi, DEF, VFR for YCDR via TVT"  
    **BN TCU** -> **AF TWR**: "DEF, AF, TVT, Flight Planned Route, A040, Squawk 3601"  
    **AF TWR** -> **BN TCU**: "AF, TVT, Flight Planned Route, A040, Squawk 3601, DEF"  
    **AF TWR** Will then pass the airways clearance to DEF

#### Arrivals

YBAF arrivals shall be coordinated to **AF TWR** from the relevant BN TCU controller prior to transfer of jurisdiction.

!!! example
    **BN TCU** -> **AF TWR**: "BDF, via HUUGO, Number 1"  
    **AF TWR** -> **BN TCU**: "BDF, Number 1"  

# BN TCU / AMB APP

#### Departures
Departures from YAMB in to BN TCU Class C will be coordinated at taxi, and will be requesting a level.

!!! example
    **AMB APP** -> **BN TCU**: "Taxi, FALC22 for YSRI via GOMOL, Requesting F340"  
    **BN TCU** -> **AMB APP**: "FALC22, F180"  
    **AMB APP** -> **BN TCU**: "F180, FALC22"  

#### Arrivals/Overfliers
All aircraft transiting from BN TCU to **AMB APP** must be heads-up coordinated prior to **20nm** from the boundary. Operations within **AMB APP** are fairly ad-hoc, so there are no standard assignable levels, simply whatever the BN TCU and **AMB APP** controller agree on.

!!! example
    **BN TCU** -> **AMB APP**: "via WACKO, STAL13, what level can I assign?"  
    **AMB APP** -> **BN TCU**: "STAL13, A050"  
    **BN TCU** -> **AMB APP**: "A050, STAL13"  

# BN TCU / SU TWR

As you may have noticed, BN TCU Class G shares a tiny border with **SU TWR**, however there are no SIDs, STARs, or airways through this gap. The only possible way for an aircraft to directly enter SU TWR airspace from BN TCU's jurisdiction, is from Class G, and as such, no coordination is required to **SU TWR**. However, ensure the aircraft is transferred to the TWR at least **10nm** prior to the boundary, to facilitate their airways clearance.

<figure markdown>
![BN TCU / SU TWR Border](img/subntcu.png){ width="700" }
  <figcaption>BN TCU / SU TWR Border</figcaption>
</figure>

**SU TWR** coordination for arrivals and departures via the SID/STAR is handled by **INL** (or **NSA** when they are online).
