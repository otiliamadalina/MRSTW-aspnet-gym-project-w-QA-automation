﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using eUseControl.Domain.Entities.BaseEntities;

namespace eUseControl.Domain.Entities.Discount
{
    public class NewDiscountDto
    {
          public int Id { get; set; }
        public string DiscountCode { get; set; }
        public int DiscountPercentage { get; set; }
    }

}
