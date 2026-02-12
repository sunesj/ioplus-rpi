module.exports = {
    openSync: function(busNumber) {
        console.log("--- [MOCK] I2C Bus " + busNumber + " opened ---");
        return {
            writeByte: (addr, cmd, val, cb) => { 
                console.log("[MOCK] Write Byte -> Addr: 0x" + addr.toString(16) + " Reg: " + cmd + " Val: " + val);
                if (cb) cb(null); 
            },
            writeWord: (addr, cmd, val, cb) => { 
                console.log("[MOCK] Write Word -> Addr: 0x" + addr.toString(16) + " Reg: " + cmd + " Val: " + val);
                if (cb) cb(null); 
            },
            readByte: (addr, cmd, cb) => { 
                console.log("[MOCK] Read Byte <- Addr: 0x" + addr.toString(16) + " Reg: " + cmd);
                if (cb) cb(null, 0); 
            },
            readI2cBlock: (addr, cmd, len, buffer, cb) => { 
                console.log("[MOCK] Read Block <- Addr: 0x" + addr.toString(16) + " Reg: " + cmd + " Len: " + len);
                // Fill buffer with fake data (e.g., all 0s)
                buffer.fill(0);
                if (cb) cb(null, len, buffer); 
            },
            closeSync: () => console.log("--- [MOCK] I2C Bus closed ---")
        };
    }
};
