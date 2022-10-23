---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

# PH ADC / PH TCU
### Auto Release

"Next" Coordination is a procedure where the PH TWR controller gives a heads-up to the PH TCU controller about an impending departure. The PH TCU controller will respond by assigning a heading to the aircraft, for the PH TWR controller to pass on with their takeoff clearance.

!!! example
    PH ADC -> PH TCU: "Next, ABC"  
    PH TCU -> PH ADC: "ABC, Heading 010"  
    PH ADC -> PH TCU: "Heading 010, ABC"  
    PH ADC -> ABC: "ABC, Assigned heading left 010, Runway 03, Cleared for Takeoff"  
    ABC -> PH ADC: "Left heading 010, Runway 010, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

"Next" Coordination to PH TCU is additionally required for:  
    a) Aircraft on a non-standard level. 
    b) Aircraft departing from a runway not nominated in the ATIS. 

The PH TCU controller can suspend/resume Auto Release at any time, with the concurrence of PH TWR.

"Next" Coordination to PH TCU is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

#### Standard Assignable Departure Levels

All aircraft: `A050` or `RFL` if lower.


# PH ADC / PH SMC
### Ground Operations
ADC has Responsibility of the Runways, meaning SMC must always coordinate with ADC to allow aircraft to cross runways whilst taxiing. SMC may request, or ADC may elect, to release certain runways to the SMC controller, so they may let aircraft cross the runway without coordination (For example, Releasing runway 06/24 to SMC while not in use.) This Release may also be cancelled at the controller's discretion.

# PH ACD / PH TCU
The controller assuming responsibility of ACD shall give heads-up coordination to the relevant PH TCU controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS

!!! example
    ABC -> PH ACD: "Perth Delivery, ABC, Requesting a Victor 65 scenic."  
    PH ACD -> ABC: "ABC, Perth Delivery, Standby"  
    PH ACD -> PH TCU: "ABC, Requesting clearance for a victor 65 scenic"  
    PH TCU -> PH ACD: "ABC, Cleared for a victor 65 scenic"  
    PH ACD -> PH TCU: "Cleared for a victor 65 scenic ABC"  
    PH ACD -> ABC: "ABC, Cleared for a victor 65 scenic"  
    ABC -> PH ACD: "Cleared for a victor 65 scenic, ABC"  
