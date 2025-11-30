// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 private _nextTokenId;
    string public eventId;
    uint256 public price;
    uint256 public maxSupply;
    address public factory;

    event TicketMinted(address indexed to, uint256 indexed tokenId, string eventId);

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _eventId,
        uint256 _price,
        uint256 _maxSupply,
        address _organizer
    ) ERC721(_name, _symbol) Ownable(_organizer) {
        eventId = _eventId;
        price = _price;
        maxSupply = _maxSupply;
        factory = msg.sender;
    }

    function safeMint(address to, string memory uri) public payable {
        require(msg.value >= price, "Insufficient funds sent");
        require(_nextTokenId < maxSupply, "Max supply reached");

        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        emit TicketMinted(to, tokenId, eventId);
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
