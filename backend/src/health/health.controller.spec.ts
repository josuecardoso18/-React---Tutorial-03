import { jest } from '@jest/globals';
import { Test } from '@nestjs/testing';
import { HealthController } from './health.controller.js';
import { HealthService } from './health.service.js';

describe('HealthController', () => {
  it('deve retornar o status da API', async () => {
    const response = {
      status: 'ok',
      database: 'connected',
    };

    const checkMock = jest.fn<() => Promise<typeof response>>()
      .mockResolvedValue(response);

    const module = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: {
            check: checkMock,
          },
        },
      ],
    }).compile();

    const controller = module.get(HealthController);

    await expect(controller.check()).resolves.toEqual(response);
  });
});