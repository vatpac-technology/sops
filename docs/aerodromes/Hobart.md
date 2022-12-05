---
  title: Hobart (YMHB)
---

--8<-- "includes/abbreviations.md"

## Positions

| Name              | Callsign       | Frequency        | Login Identifier                         |
| ----------------- | -------------- | ---------------- | ---------------------------------------- |
| Hobart ADC    | Hobart Tower   | 118.100     | HB_TWR                            |
| Hobart SMC    | Hobart Ground  | 121.700     | HB_GND                  |
| Hobart ATIS       |                | 128.450          | YMHB_ATIS                                |

### Maneuvering Area Responsibility
<figure markdown>
![YMHB Maneuvering Area](img/ymhb_maneuvring_area.png){ width="500" }
</figure>

## Airspace

<figure markdown>
![Hobart Tower Airspace](img/HBTWR.png){ width="700" }
</figure>

<figure markdown>
![Hobart Tower Class D Airspace](img/hbtwr_profile.png){ width="700" }
</figure>

Refer to [Class D Tower Skills](../../controller-skills/classdtwr) for more information.

## SID Selection

Jet Aircraft planned via **CLARK**, **LATUM**, or **LAVOP**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.

Non-Jet Aircraft planned via **CLARK**, **KANLI**, or **LAVOP**, shall be assigned the **Procedural SID** that terminates at the appropriate waypoint.

Other aircraft shall be assigned an appropriate **Procedural SID** or a visual departure.

## Cambridge (YCBG)

Due to it's close proximity, HB ADC & SMC are responsible for clearances into and out of Cambridge (YCBG), which sits inside the Hobart Class D control zone.

### Departures
Prior to leaving the apron, all outbound aircraft will establish communications with **HB SMC** for Airways Clearance.  

All IFR Aircraft departing Cambridge shall be assigned a **Visual Departure** or one of Hobart's **Procedural SIDs**.

!!! note
    Both VFR and IFR aircraft require a clearance to operate in Class D airspace (even if this is an implied clearance to depart a leg of the circuit).  The examples below show an IFR aircraft departing.

!!! Example
    **NDR:** "Hobart Ground, NDR, for Devonport, Request Clearance"  
    **HB SMC:** "NDR, Cleared to Devonport via KANLI flight plan route, KANLI3 Departure, Climb via SID A045, Squawk 4432"
    `AIP GEN 3.4`

When ready to taxi and prior to leaving the apron aircraft must contact **HB ADC**, advising intended runway for departure and receipt of YMHB ATIS, to obtain traffic information.

!!! Example
    **NDR:** "Hobart Tower, NDR, taxiing Cambridge Runway 32, received Hobart Information D"  
    **HB ADC:** "NDR, No reported IFR traffic, report ready"  
    **NDR:** "Wilco, NDR"  
    `AIP GEN 3.4`

Takeoff clearances are not given. Aircraft will remain clear of the active runway and report ready to HB ADC. Aircraft must not enter an active runway or become airborne until departure instructions have been issued.

!!! Example
    **NDR:** "NDR, Ready"  
    **HB ADC:** "NDR, track via the KANLI3 departure, report airborne"  
    **NDR:** "Track via the KANLI3 departure, wilco, NDR"  
    `AIP GEN 3.4`


### Arrivals
Inbound VFR aircraft should be instructed to join a leg of the circuit and cleared for a visual approach (traffic permitting).  In IMC, IFR aircraft will fly one of Hobart's instrument approaches until visual, then break off to circle to land.

As a landing clearance is not given, aircraft should instead be informed of any traffic operating on the aerodrome and instructed to report clear of the runway.

!!! example
    *UJA is an IFR Aero Commander who has been cleared the YMHB RNAV-Z RWY 30 approach by HB APP and handed off to HB ADC.*  
    **UJA:** "Hobart Tower, UJA"  
    **HB ADC:** "UJA, Hobart Tower, report visual"  
    **UJA:** "Wilco, UJA"  

    **UJA:** "UJA, visual"  
    **HB ADC:** "UJA, track for final runway 30, no reported traffic, report clear of the runway"  
    **UJA:** "Track for final runway 30, wilco, UJA"

!!! example
    *KLR is a VFR Cherokee who is tracking inbound on the Victor East VFR route.*  
    **HB ADC:** "KLR, enter the control zone tracking via the Victor East, A015, clearance limit Sorell"  
    **KLR:** "Enter control zone tracking via the Victor East, A015, clearance limit Sorell, KLR"  

    **KLR:** "KLR, approaching Sorell"  
    **HB ADC:** "KLR, join base runway 12, cleared visual approach, no reported traffic, report clear of the runway"  
    **KLR:** "Join base runway 12, cleared visual approach, wilco, KLR"

## VFR Operations


### Circuit Direction

| Runway | Direction |
| ------ | ----------|
| 12     | Left  |
| 30     | Right |


### Inbound / Outbound

| Victor    | Inbound       | Outbound        | 
| --------- | -------------- | ---------------- | 
| Northwest |  CBV-CPA-RCH west of the Colebrook/Richmond Road to west abeam RADT.  | West abeam RADT-RCH-CPA-CBV west of the Richmond/Colebrook Road.    | 
| Northeast |  CBV-CPA-Orielton-SORL east of Colebrook Road to CPA then Orielton east of Tasman HWY to SORL. |  As directed by ATC to SORL then Orielton east of Tasman HWY, thence east of Colebrook Rd east of CPA to CBV.   | 
| East      |  DLY-SORL north of the Arthur HWY.        |  As directed by ATC to SORL   | 
| Southwest |  DRP to-CBG west of Mt Rumney.        |  Eest of Mt Rumney to DRP.        | 
| South     |  CRM-LAUD-CBG.            |  LAUD-CRM.          | 
| West      |  BOWB to Risdon Vale thence Cambridge township.   |  Risdon Vale thence BOWB. | 

<figure markdown>
![Victor Routes](img/victor_routes.png){ width="700" }
</figure>

Clearances for aircraft entering the CTR must be worded so as to leave no possibility for misinterpretation by the pilot.

!!! Example
    **NDR:** "Hobart Tower, NDR, Campania, A015, on the Victor Northwest, received Romeo, request clearance"  
    **HB ADC:** "NDR, enter the CTR tracking via the Victor Northwest at A015."
    `AIP GEN 3.4`

## Coordination
### Departures
"Next" Coordination to HBA is required for all deps not assigned a SID.

"Next" Coordination is a procedure where the **HB ADC** controller gives a heads-up to the HBA controller about an impending departure not on a SID. The HBA controller will respond by assigning a visual heading to the aircraft, for the **HB ADC** controller to pass on with their takeoff clearance.

!!! example
    <span class="hotline">**HB ADC** -> **HB TCU**</span>: "Next, ABC, runway 12"  
    <span class="hotline">**HB TCU** -> **HB ADC**</span>: "ABC, Heading 150 Visual, unrestricted"  
    <span class="hotline">**HB ADC** -> **HB TCU**</span>: "Heading 150 Visual unrestricted, ABC"  

    **HB ADC**: "ABC, Assigned heading right 150 Visual, Runway 12, Cleared for Takeoff"  
    **ABC**: "Right heading 150 Visual, Runway 12, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

The HBA controller can suspend/resume Auto Release at any time, with the concurrence of **HB ADC**.

!!! Note
    "Next" Coordination to HBA is not required for aircraft assigned a **Procedural SID** and the Standard Assignable Level.

The controller assuming responsibility of **HB ACD** shall give heads-up coordination to HBA controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS

The Standard Assignable level from HB ADC to HBA is:  
For Jets: `A080`  
For Non-Jets: The lower of `A045` or the `RFL`.
### Arrivals
HBA will coordinate all YMHB arrivals to HB ADC prior to 5 mins from the boundary.