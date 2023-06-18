import { PlatillosDto } from "../models/PlatillosDto.model";

export interface ServiceResponse {
    message: {
      code: number;
      message: string;
    };
    data: PlatillosDto[];
  }
  