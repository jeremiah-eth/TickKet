// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./TicketNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EventFactory is Ownable {
    struct EventDetails {
        address ticketContract;
        address organizer;
        string eventId;
        bool isActive;
    }

    mapping(string => EventDetails) public events;
    string[] public eventIds;

    event EventCreated(string indexed eventId, address indexed ticketContract, address indexed organizer);

    constructor() Ownable(msg.sender) {}

    function createEvent(
        string memory _name,
        string memory _symbol,
        string memory _eventId,
        uint256 _price,
        uint256 _maxSupply
    ) public {
        require(events[_eventId].ticketContract == address(0), "Event ID already exists");

        TicketNFT newTicket = new TicketNFT(
            _name,
            _symbol,
            _eventId,
            _price,
            _maxSupply,
            msg.sender
        );

        events[_eventId] = EventDetails({
            ticketContract: address(newTicket),
            organizer: msg.sender,
            eventId: _eventId,
            isActive: true
        });

        eventIds.push(_eventId);

        emit EventCreated(_eventId, address(newTicket), msg.sender);
    }

    function getEvent(string memory _eventId) public view returns (EventDetails memory) {
        return events[_eventId];
    }

    function getAllEvents() public view returns (EventDetails[] memory) {
        EventDetails[] memory allEvents = new EventDetails[](eventIds.length);
        for (uint256 i = 0; i < eventIds.length; i++) {
            allEvents[i] = events[eventIds[i]];
        }
        return allEvents;
    }
}
