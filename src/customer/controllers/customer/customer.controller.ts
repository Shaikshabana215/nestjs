import { Body, Controller,Get, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { error } from 'console';
import { CreateCustomerDto } from 'src/customer/dtos/createCustomer.dto';
import { CustomerService } from 'src/customer/services/customer/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService:CustomerService){}
   
//    @Get(':id')
//    getCustomer(@Param('id', ParseIntPipe) id: number,
//    @Req() req: Request,
//    @Res() res: Response)
//    {
//     const customer = this.customerService.findCustomerById(id);
//     if(customer){
//         return res.send(customer);
//     }
//     else{
//         res.status(400).send({msg:'Customer cannot found'})
//     }
//    } 

   @Get('/search/:id')
   searchCustomerById(@Param('id',ParseIntPipe)id: number){
    const customer = this.customerService.findCustomerById(id);
    if(customer) return customer;
    else throw new error;
   }
   @Get('')
   getAllCustomers(){
    return this.customerService.getCustomers();
   }
   @Post('create')
   createCustomer(@Body() createCustomerDto: CreateCustomerDto){
   console.log(createCustomerDto);
   this.customerService.createCustomer(createCustomerDto);
   }
}
