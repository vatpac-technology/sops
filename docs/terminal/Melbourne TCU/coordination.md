---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

# ML TCU / ENR
#### Departures
Voiceless coordination is in place from ML TCU to all surrounding ENR sectors (ELW to the East, YWE All other directions) for aircraft:  
Planned at or above F240: `Assigned F240`  
Planned below F240: `Assigned the RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    MDN -> YWE: "QFA123, with your concurrence, will be assigned F190, for my separation with QLK456D"  
    YWE -> MDN: "QFA123, concur F190"  
    MDN -> YWE: "F190, QFA123" 

#### Arrivals
The Standard assignable level from ENR to ML TCU is `A090`. All other levels must be prior coordinated

# ML TCU / ML ADC
#### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned A050.

Any aircraft that don't meet these criteria must be coordinated to ML TCU with a "Next" Call.

"Next" Coordination is a procedure where the BN ADC controller gives a heads-up to the BN TCU controller about an impending departure. The BN TCU controller will respond by assigning a heading to the aircraft, for the BN ADC controller to pass on with their takeoff clearance.

!!! example
    ML ADC -> ML TCU: "Next, ABC"  
    ML TCU -> ML ADC: "ABC, Track Extended Centreline"  
    ML ADC -> ML TCU: "Track Extended Centreline, ABC"  
    ML ADC -> ABC: "ABC, Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff"  
    ABC -> ML ADC: "Track Extended Centreline 340 degrees, Runway 34, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4 6.16.6 3h`

# ML TCU / EN TWR
#### Departures

Aircraft departing YMEN in to ML TCU Class C will be coordinated from EN TWR at Taxi.

!!! example
    EN TWR -> ML TCU: "Taxi, ABC for YBDG, Runway 17, via ML V376 DOTPA"  
    ML TCU -> EN TWR: "ABC for YBDG, Runway 17, via ML V376 DOTPA, A030"  
    EN TWR -> ML TCU: "A030, ABC" 
#### Arrivals
ML TCU Must coordinate the sequence information to EN TWR prior to transfer of jurisdiction. ML TCU is responsible for clearing aircraft for the approach prior to handoff to EN TWR.

!!! example
    ML TCU -> EN TWR: "New sequence of 1, FD123, via MONTY, Number 1"  
    EN TWR -> ML TCU: "FD123, Number 1"  
# ML TCU / AV TWR
#### Departures

Aircraft departing YMAV in to ML TCU CTA will be coordinated from AV TWR at Taxi.

!!! example
    AV TWR -> ML TCU: "Taxi, JST604 for YSSY, Runway 18, JUSTY2 departure"  
    ML TCU -> AV TWR: "JST604, Runway 18, JUSTY1, Squawk 3601"  
    AV TWR -> ML TCU: "3601, JST604"
#### Arrivals
ML TCU Must coordinate the sequence information to AV TWR prior to transfer of jurisdiction.

!!! example
    ML TCU -> AV TWR: "New sequence of 1, JST612, via TEMPL, Number 1"  
    AV TWR -> ML TCU: "JST612, Number 1"  

When the aircraft is ready for takeoff, AV TWR will give a "Next" call, where ML TCU will provide the cleared level, and any additional departure instructions.

!!! example
    AV TWR -> ML TCU: "Next, JST604"  
    ML TCU -> AV TWR: "JST604, A040"  
    AV TWR -> ML TCU: "A040, JST604"

# ML TCU / MB TWR
#### Departures

Aircraft departing YMMB in to ML TCU CTA will be coordinated from MB TWR at Taxi.

!!! example
    MB TWR -> ML TCU: "Taxi, SGE for YBLT via ML"  
    ML TCU -> MB TWR: "SGE for YBLT via ML, Squawk 3601"  
    MB TWR -> ML TCU: "3601, SGE"

When the aircraft is ready for takeoff, MB TWR will give a "Next" call, where ML TCU will provide the cleared level.

!!! example
    MB TWR -> ML TCU: "Next, SGE"  
    ML TCU -> MB TWR: "SGE, A060"  
    MB TWR -> ML TCU: "A060, SGE"

!!! note
    ML TCU will not receive a taxi call on aircraft departing in to Class G airspace, including aircraft that have planned to leave and re-enter controlled airspace (for example, aircraft planned at or above A050 on the MB-AV track). In this instance, ML TCU is only required to readback the callsign at the "Next" call. ML TCU will then give airways clearance to the aircraft on first contact if required.
#### Arrivals
ML TCU Must coordinate the sequence information to MB TWR prior to transfer of jurisdiction.

!!! example
    ML TCU -> MB TWR: "New sequence of 1, OXA, via MMBSA, Number 1"  
    MB TWR -> ML TCU: "OXA, Number 1"  