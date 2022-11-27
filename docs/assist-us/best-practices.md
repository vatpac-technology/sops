---
  title: Best Practices
---

--8<-- "includes/abbreviations.md"

When contributing to this project, aim to follow the best practices outlined below to ensure your changes are standardised and fit in with the existing format.

## File Names
Ensure new files are named lowercase only, so that the menu items are sorted alphabetically in a predictable way.

## Links

All links that navigate a user away from the SOPs site should have `{target=new}` appended - this opens the link in a new tab.

=== "Internal Link"

    ``` md
    [Internal Link](enroute.md)
    ```

=== "External Link"

    ``` md
    [External Link](https://vatpac.org){target=new}
    ```

!!! warning
    All external links should use the `https` protocol.

## Sector Names
Where available, controller positions should be referred to by their abbreviation (e.g. SAN for Sydney Approach North).  Where multiple positions are discussed in close proximity, consider **bolding** the sector names.  The `abbreviations.md` file contains a list of all sector abbreivations and creates a tooltip with their full name for clarification.

## Altitudes
Describe any altitudes in the format of `Axxx` (for altitudes below 10,000ft) or `Fxxx` (for flight levels above 10,000ft) and wrap them in backticks.

!!! example
    ``` md
    Departures should climb to `A010`
    ```  
    Departures should climb to `A010`

## Radio Calls & Coordination
It is recommended to include an example highlighting any unique or lesser-known radio calls which apply to a procedure, and to indicate any coordination requirements associated with a position.  

### Radio Calls
Radio calls should take the following format:  

``` md
**STATION NAME**: "Message"
```

!!! example
    **VOZ1545**: "VOZ1545, request descent"  
    **HUO**: "VOZ1545, descend to FL130" 

### Coordination
Coordination examples should take the following format:  

``` md
**INITIATING SECTOR** -> **RECEIVING SECTOR**: "Message"
```

The sector names (including the arrow) should be wrapped in a `<span>` and given a class of either `hotline` or `coldline` to denote which coordination method should be used.  

``` md
<span class="coldline">**INITIATING SECTOR** -> **RECEIVING SECTOR**</span>: "Message"
```

As a general rule of thumb, hotlines should be used in all circumstances, except for:  
- Taxi coordination from Class D Tower to TCU/ENR position  
- Inbound coordination from TCU/ENR to Class D Tower  
- Oceanic coordination  
- Airways clearance requests from ACD to overlying TCU/ENR position (e.g. Sydney Delivery requesting clearance to YSBK on behalf of an aircraft)

!!! example
    <span class="coldline">**NW TCU** -> **WOL**</span>: "Taxi, PSDN18 for YMCO via URBOB, Requesting F130"  
    <span class="coldline">**WOL** -> **NW TCU**</span>: "PSDN18, F130"  
    <span class="coldline">**NW TCU** -> **WOL**</span>: "F130, PSDN18" 

    <span class="hotline">**WOL** -> **NW TCU**</span>: "via CB, SKJ, with your concurrence, will be assigned descent to A090"  
    <span class="hotline">**NW TCU** -> **WOL**</span>: "SKJ, concur A090" 