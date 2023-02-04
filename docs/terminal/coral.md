---
  title: Coral TCU
---

--8<-- "includes/abbreviations.md"

## Positions

| Name               | ID      | Callsign       | Frequency        | Login Identifier              |
| ------------------ | --------------| -------------- | ---------------- | ---------------------|
| Mackay Approach  | MKA | Coral Approach  | 125.650       | MK_APP    |
| Rockhampton Approach  | RKA | Coral Approach   | 123.750        | RK_APP                 |

Upper Limit of the Coral TCU is `F150`

!!! Note
    MKA may extend to RKA and vice versa, callsigns remain the same.

!!! tip
    When setting up vatSys, it is recommended that you have seperate air displays open for MKA and RKA.
    <figure markdown>
    ![Coral Combined Airspace](img/coralrec.png){ width="1000" }
    </figure>
## Coordination

### COR TCU / ENR
#### Departures
Voiceless coordination is in place from MKA/RKA to ENR for aircraft:  

**Departing All Ports** - Assigned the lower of `F150` or `RFL`  

Any aircraft not meeting the above criteria must be prior coordinated to ENR.

!!! example
    <span class="hotline">**COR TCU** -> **ENR**</span>: "QFA114, with your concurrence, will be assigned F130, for my separation with ZYX"  
    <span class="hotline">**ENR** -> **COR TCU**</span>: "QFA114, concur F130"  

#### Arrivals
The Standard assignable levels from **ENR** to MKA/RKA are as follows:  
YBMK Arrivals: `A070`  
YBRK Arrivals: `A070`

### ADC / TCU

#### Airspace
MK ADC and RK ADC both own the Class D airspace within their respective CTRs, `SFC` to `A010`. MKA/RKA own the Class D and Class C airspace above `A010`.
#### Auto Release
"Next" Coordination to TCU is required for all deps not assigned a SID.

"Next" Coordination is a procedure where the **ADC** controller gives a heads-up to the TCU controller about an impending departure not on a SID. The TCU controller will respond by assigning a visual heading to the aircraft, for the **ADC** controller to pass on with their takeoff clearance.

!!! example
    <span class="hotline">**MK ADC** -> **MK TCU**</span>: "Next, ABC, runway 14"  
    <span class="hotline">**MK TCU** -> **MK ADC**</span>: "ABC, Heading 150 Visual, unrestricted"  
    <span class="hotline">**MK ADC** -> **MK TCU**</span>: "Heading 150 Visual unrestricted, ABC"

The TCU controller can suspend/resume Auto Release at any time, with the concurrence of **ADC**.

!!! Note
    "Next" Coordination to TCU is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

The controller assuming responsibility of **SMC** shall give heads-up coordination to TCU controller prior to the issue of the following clearances:  

- VFR Departures  
- Aircraft using a runway not on the ATIS

#### Arrivals
The Standard assignable level from INL(KPL) to RKA is `A070`, and assigned a STAR. All other aircraft must be prior coordinated.  
The Standard assignable level from KEN(SWY) to MKA is `A070`, and assigned a STAR. All other aircraft must be prior coordinated
