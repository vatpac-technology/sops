---
title: Squawk Codes
---

--8<-- "includes/abbreviations.md"

All aircraft within the New Zealand FIR must transmit an approved SSR code, otherwise known as a Squawk Code.

!!! tip
    Further information can be found in [**ENR 1.6 - 5, "ATS Surveillance Services and Procedures"**](https://www.aip.net.nz/document-category/En-route-ENR){target=new}.

## VFR Traffic

Typically aircraft that are flying under VFR do not transmit a discrete code; instead transmitting a generic type code. There are a few exceptions, such as when they are operating within a controlled aerodrome circuit or are required to be controlled due to manoeuvreing within a Control Zone.

| Code Range  &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                                         |
| --------------------------------------- | ----------------------------------------------------------------------------------- |
| 0300 - 0377                             | Discrete Code range for Controlled VFR aircraft.                                    |
| 1200                                    | Generic code for VFR fixed wing aircraft, when a discrete code has not been issued. |
| 1300                                    | Generic code for gliders and balloons.                                              |
| 1500                                    | Generic code for a VFR helicopter when a discrete code has not been issued.         |
| 2200                                    | VFR aircraft operating within a Controlled Aerodrome circuit.                       |
| 3000 - 3777                             | Discrete code range for Controlled VFR aircraft.                                    |
| 4000 - 4777                             | Discrete code range for Controlled VFR aircraft.                                    |

!!! tip
    Discrete squawk codes can be issued to VFR aircraft when operating within a Control Zone. 
    
    For example, if a Cessna is leaving the zone via the Mangere Bridge departure at Auckland, they can be given a squawk code of 3214 to aid in discrete identification within the TMA. When they leave the control zone, they can keep the discrete code or change to the respective generic code.

    Aircraft remaining within a Controlled Aerodrome's circuit should squawk 2200. This aids in easy distinction between generic traffic and circuit traffic.

## Domestic IFR 

All IFR traffic within the New Zealand FIR is required to transmit a discrete squawk code. This is required to ensure that all traffic can be individually identified on the Controller's radar scope.

| Code Range  &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| --------------------------------------- | ------------------------------------------------------------------ |
| 2000                                    | Generic code for IFR aircraft not actively managed by an ATC unit. |
| 5000 - 5777                             | Discrete code range for Domestic IFR aircraft                      |

Codes shall be issued to an aircraft during the Clearance Delivery process, and transmitted throughout the duration of their flight.

## International IFR Traffic

All IFR traffic with their destination outside of the New Zealand Domestic FIR are required to transmit a discrete squawk code within the International IFR range. This is required to ensure that all traffic can be individually identified on the Controller's radar scope.

| Code Range &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                                                                                                                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0100 - 0177                            | Reserve code range for International IFR aircraft. This code range may only be used during high traffic events as authorised by the Events Director, or Operations Director. |
| 0200 - 0277                            | Discrete code range for International IFR aircraft.                                                                                                                          |
| 2000                                   | Generic code for IFR aircraft not actively managed by an ATC unit.                                                                                                           |

Codes shall be issued to an aircraft during the Clearance Delivery process, and transmitted throughout the duration of their flight.

!!! tip
    In the event that aircraft entering the Domestic FIR already has a discrete code issued by an international Controller, that code may be kept. 
    
    For example - If a Qantas 737 enters the Domestic FIR squawking 1221, which is a discrete code within the Australian international range, they may keep their code provided that no other aircraft has that squawk code. If their code is not unique, then they must be given a unique code before instructions can be given to that aircraft.

## Military Traffic

| Code Range &nbsp; &nbsp; &nbsp; &nbsp; | Description                                           |
| -------------------------------------- | ----------------------------------------------------- |
| 6000 - 6477                            | Discrete code range for Military fixed wing aircraft. |
| 6500 - 6577                            | Discrete code range for Military helicopters.         |

Military aircraft shall be assigned a discrete code regardless of flight profile. This code shall be assigned when either a VFR or IFR clearance is issued.

Military traffic remaining within a controlled aerodrome's circuit should continue to squawk their discrete military code.

All foreign military aircraft with their flight originating within New Zealand should also be assigned a code within the military range. If the FMA is crossing into the New Zealand FIR, it is up to the Controller's discretion whether to assign a military squawk or not.

!!! Tip
    Military traffic is relatively common on VATSIM. Because of this, Controllers should familiarize themselves with routinely used callsigns, which can be found under [Controller Skills](callsigns.md).

## Formation Flights 

Unless otherwise instructed by ATC, only the leader is to squawk NORMAL, and all other aircraft are to squawk STANDBY. 

### Military Aircraft

Military aircraft formations will be issued a 'base squawk' for the formation flight, with the last number corresponding to the aircraft's formation number. 

!!! info
    For example - A Texan Gold (TEXGLD) formation has been issued a formation squawk of 6300. In this case the first aircraft in the formation will squawk 6301, the second will squawk 6302, and so on.



### Civilian Aircraft

For aircraft not following the Military method of code assignment, a discrete code will be assigned to the formation leader, and all other aircraft should squawk code 2020.

