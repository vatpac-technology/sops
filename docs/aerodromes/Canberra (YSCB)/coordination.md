---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## CB ADC / CB TCU
### Auto Release

Auto Release shall be used for aircraft that are:    
a) Departing from a runway nominated on the ATIS; and  
b) Issued a Procedural SID; and   
c) Assigned `A100`;

Any aircraft that don't meet these criteria must be coordinated to CB TCU with a "Next" Call

!!! example
    **CB ADC** -> **CB TCU**: "Next, ABC"  
    **CB TCU** -> **CB ADC**: "ABC, Assigned Left 270, Unrestricted"  
    **CB ADC** -> **CB TCU**: "Assigned Left 270, Unrestricted, ABC"  
    **CB ADC** -> **ABC**: "ABC, Assigned Left 270, Runway 35, Cleared for Takeoff"  
    **ABC** -> **CB ADC**: "Assigned Left 270, Runway 35, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

## Runway Change
Any Runway change must be prior coordinated to **CB TCU** and **CB ADC**.

## Standard Assignable Departure Levels

IFR: `A100`  
VFR: `A040` or `RFL` if lower
