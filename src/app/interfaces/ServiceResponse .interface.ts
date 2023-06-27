import { ClienteDto } from "../models/ClienteDto.model";
import { PlatillosDto } from "../models/PlatillosDto.model";

export interface ServiceResponse {
    message: {
      code: number;
      message: string;
    };
    data: PlatillosDto[];
}

export interface ServiceResponseCliente {
  message: {
    code: number;
    message: string;
  };
  data: ClienteDto[];
}


