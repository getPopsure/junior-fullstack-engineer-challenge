import { NextFunction, Request, Response } from "express";
import service from "./service";

const getPolicies = async (req: Request, res: Response, next: NextFunction) => {
  let policies;
  try {
    const { search, page } = req.query;

    let pageInt = 1;
    if (page) {
      pageInt = parseInt(page as string, 10);
    }

    policies = await service.findPolicies(search as string, pageInt as number);
    const totalPage = await service.getPolicyCount();

    const response = { policies, totalPage: totalPage._count };
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export default { getPolicies };
