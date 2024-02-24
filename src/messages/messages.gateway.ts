import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(81, {
  cors: {
    origin: '*'
  }
})
export class MessagesGateway implements OnGatewayInit, OnGatewayDisconnect, OnGatewayConnection {
  @WebSocketServer() server: Server;

  afterInit(server: any) {
    console.log('Server initialized');
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Client connected');
  }
}
