class Ipv4Calculator {
  maskTable = [
    {
      mask: '0.0.0.0',
      wildCardMask: '255.255.255.255',
      maxHosts: '4294967294',
      maxSubnets: '4294967296',
    },
    {
      mask: '128.0.0.0',
      wildCardMask: '127.255.255.255',
      maxHosts: '2147483646',
      maxSubnets: '2147483648',
    },
    {
      mask: '192.0.0.0',
      wildCardMask: '63.255.255.255',
      maxHosts: '1073741822',
      maxSubnets: '1073741824',
    },
    {
      mask: '224.0.0.0',
      wildCardMask: '31.255.255.255',
      maxHosts: '536870910',
      maxSubnets: '536870912',
    },
    {
      mask: '240.0.0.0',
      wildCardMask: '15.255.255.255',
      maxHosts: '268435454',
      maxSubnets: '268435456',
    },
    {
      mask: '248.0.0.0',
      wildCardMask: '7.255.255.255',
      maxHosts: '134217726',
      maxSubnets: '134217728',
    },
    {
      mask: '252.0.0.0',
      wildCardMask: '3.255.255.255',
      maxHosts: '67108862',
      maxSubnets: '67108864',
    },
    {
      mask: '254.0.0.0',
      wildCardMask: '1.255.255.255',
      maxHosts: '33554430',
      maxSubnets: '33554432',
    },
    {
      mask: '255.0.0.0',
      wildCardMask: '0.255.255.255',
      maxHosts: '16777214',
      maxSubnets: '16777216',
    },
    {
      mask: '255.128.0.0',
      wildCardMask: '0.127.255.255',
      maxHosts: '8388606',
      maxSubnets: '8388608',
    },
    {
      mask: '255.192.0.0',
      wildCardMask: '0.63.255.255',
      maxHosts: '4194302',
      maxSubnets: '4194304',
    },
    {
      mask: '255.224.0.0',
      wildCardMask: '0.31.255.255',
      maxHosts: '2097150',
      maxSubnets: '2097152',
    },
    {
      mask: '255.240.0.0',
      wildCardMask: '0.15.255.255',
      maxHosts: '1048574',
      maxSubnets: '1048576',
    },
    {
      mask: '255.248.0.0',
      wildCardMask: '0.7.255.255',
      maxHosts: '524286',
      maxSubnets: '524288',
    },
    {
      mask: '255.252.0.0',
      wildCardMask: '0.3.255.255',
      maxHosts: '262142',
      maxSubnets: '262144',
    },
    {
      mask: '255.254.0.0',
      wildCardMask: '0.1.255.255',
      maxHosts: '131070',
      maxSubnets: '131072',
    },
    {
      mask: '255.255.0.0',
      wildCardMask: '0.0.255.255',
      maxHosts: '65534',
      maxSubnets: '65536',
    },
    {
      mask: '255.255.128.0',
      wildCardMask: '0.0.127.255',
      maxHosts: '32766',
      maxSubnets: '32768',
    },
    {
      mask: '255.255.192.0',
      wildCardMask: '0.0.63.255',
      maxHosts: '16382',
      maxSubnets: '16384',
    },
    {
      mask: '255.255.224.0',
      wildCardMask: '0.0.31.255',
      maxHosts: '8190',
      maxSubnets: '8192',
    },
    {
      mask: '255.255.240.0',
      wildCardMask: '0.0.15.255',
      maxHosts: '4094',
      maxSubnets: '4096',
    },
    {
      mask: '255.255.248.0',
      wildCardMask: '0.0.7.255',
      maxHosts: '2046',
      maxSubnets: '2048',
    },
    {
      mask: '255.255.252.0',
      wildCardMask: '0.0.3.255',
      maxHosts: '1022',
      maxSubnets: '1024',
    },
    {
      mask: '255.255.254.0',
      wildCardMask: '0.0.1.255',
      maxHosts: '510',
      maxSubnets: '512',
    },
    {
      mask: '255.255.255.0',
      wildCardMask: '0.0.0.255',
      maxHosts: '254',
      maxSubnets: '256',
    },
    {
      mask: '255.255.255.128',
      wildCardMask: '0.0.0.127',
      maxHosts: '126',
      maxSubnets: '128',
    },
    {
      mask: '255.255.255.192',
      wildCardMask: '0.0.0.63',
      maxHosts: '62',
      maxSubnets: '64',
    },
    {
      mask: '255.255.255.224',
      wildCardMask: '0.0.0.31',
      maxHosts: '30',
      maxSubnets: '32',
    },
    {
      mask: '255.255.255.240',
      wildCardMask: '0.0.0.15',
      maxHosts: '14',
      maxSubnets: '16',
    },
    {
      mask: '255.255.255.248',
      wildCardMask: '0.0.0.7',
      maxHosts: '6',
      maxSubnets: '8',
    },
    {
      mask: '255.255.255.252',
      wildCardMask: '0.0.0.3',
      maxHosts: '2',
      maxSubnets: '4',
    },
    {
      mask: '255.255.255.254',
      wildCardMask: '0.0.0.1',
      maxHosts: '2',
      maxSubnets: '2',
    },
    {
      mask: '255.255.255.255',
      wildCardMask: '0.0.0.0',
      maxHosts: '1',
      maxSubnets: '1',
    },
  ];

  result = {
    ipAddress: '',
    subnetMask: '',
    subnetMaskArray: Array,
    bitMask: 0,
    wildcardMask: '',
    wildcardArray: Array,
    maxSubnets: '',
    maxHosts: '',
    network: '',
    networkArray: Array,
    broadcastArray: Array,
    networkAddressAndBitMask: '',
    networkAddressRange: '',
  };

  constructor(ipAddress: string, bitMask: number) {
    this.result.ipAddress = ipAddress;
    this.result.bitMask = bitMask;
    this.result.subnetMask = this.maskTable[bitMask].mask;
    this.result.wildcardMask = this.maskTable[bitMask].wildCardMask;
    this.result.maxHosts = this.maskTable[bitMask].maxHosts;
    this.result.maxSubnets = this.maskTable[bitMask].maxSubnets;
    this.setNetworkAddress();
    // Set Broadcast Address
    this.setBroadcastAddress();
    // Set IP Range
    this.setIpRange();
  }

  // Create IP Array
  // & Convert to Number
  createIpArray() {
    const { ipAddress } = this.result;
    const ipNumberArray = [];
    const ipArray = ipAddress.split('.');
    ipArray.forEach((value, index) => {
      ipNumberArray[index] = parseInt(value, 10);
    });
    return ipNumberArray;
  }

  // Create Mask Array
  // & Convert to Number
  createMaskArray() {
    const { subnetMask } = this.result;
    const maskNumberArray = [];
    const maskArray = subnetMask.split('.');
    maskArray.forEach((value, index) => {
      maskNumberArray[index] = parseInt(value, 10);
    });
    this.result.subnetMaskArray = maskNumberArray;
    return maskNumberArray;
  }

  // Network Address
  setNetworkAddress() {
    const ipArray = this.createIpArray();
    const maskArray = this.createMaskArray();
    const networkArray = [];
    const networkNumberArray = [];
    for (let index = 0; index < ipArray.length; index += 1) {
      const ipOctet = ipArray[index];
      const maskOctet = maskArray[index];
      const networkOctet = ipOctet & maskOctet;
      networkArray[index] = networkOctet.toString(10);
      networkNumberArray[index] = networkOctet;
    }
    // Set IP Range
    this.result.networkArray = networkNumberArray;
    this.result.network = networkArray.join('.');
    this.result.networkAddressAndBitMask = `${this.result.network}/${this.result.bitMask}`;
  }

  // Create Wildcard Array
  createWildcardArray() {
    const { wildcardMask } = this.result;
    const wildcardNumberArray = [];
    const wildcardArray = wildcardMask.split('.');
    wildcardArray.forEach((value, index) => {
      wildcardNumberArray[index] = parseInt(value, 10);
    });
    this.result.wildcardArray = wildcardNumberArray;
  }

  // Set Broadcast Array
  // For IP Range
  setBroadcastAddress() {
    this.createWildcardArray();
    const { wildcardArray } = this.result;
    const { networkArray } = this.result;
    const broadcastNumberArray = [];
    for (let index = 0; index < wildcardArray.length; index += 1) {
      const wildcardOctet = wildcardArray[index];
      const networkOctet = networkArray[index];
      const broadcastOctet = networkOctet | wildcardOctet;

      broadcastNumberArray[index] = broadcastOctet;
    }

    this.result.broadcastArray = broadcastNumberArray;
  }

  // Get Address Range
  // Need Network and Broadcast
  setIpRange() {
    // Destructure Result
    const { networkArray } = this.result;
    const { broadcastArray } = this.result;

    // Start IP Address
    const startAddressArray = [];
    const startAddressNumberArray = networkArray;
    startAddressNumberArray[3] += 1;
    // End IP Address
    const endAddressArray = [];
    const endAddressNumberArray = broadcastArray;

    endAddressNumberArray[3] -= 1;
    // Convert to String
    for (let index = 0; index < networkArray.length; index += 1) {
      const startOctet = startAddressNumberArray[index];
      const endOctet = endAddressNumberArray[index];

      startAddressArray[index] = startOctet.toString(10);
      endAddressArray[index] = endOctet.toString(10);
    }
    const startAddress = startAddressArray.join('.');
    const endAddress = endAddressArray.join('.');
    // Assign IP Range
    this.result.networkAddressRange = `${startAddress} - ${endAddress}`;
  }
}

export default Ipv4Calculator;
