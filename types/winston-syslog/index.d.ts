// Type definitions for winston-syslog v2.0.0
// Project: https://github.com/winstonjs/winston-syslog
// Definitions by: Felix Hochgruber <https://github.com/felix-hoc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Transport from 'winston-transport';
import * as dgram from 'dgram';
import * as net from 'net';

declare module 'winston-syslog' {

    export interface SyslogTransportOptions extends Transport.TransportStreamOptions {
        host?: string;
        port?: number;
        path?: string;
        protocol?: string;
        pid?: number;
        facility?: string;
        localhost?: string;
        type?: string;
        app_name?: string;
        eol?: string;
    }

    interface SyslogTransportInstance extends Transport {

        producer: any;
        socket: dgram.Socket | net.Socket;

        connect(callback: (err: (true | null)) => any): void;

        new(options?: SyslogTransportOptions): SyslogTransportInstance;
    }
}

export const Syslog: SyslogTransportInstance;
