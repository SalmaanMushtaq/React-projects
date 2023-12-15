using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AJ.School.API.DomainModal.Base
{
    public class BaseDM<T> where T : struct //struct is a value type so comtaible with int 
        //if we use class which will throw error
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public T Id { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDateUTC { get; set; }
        public string? ModifiedBy { get; set; }
        public DateTime? ModifiedDateUTC { get; set; }
    }
}
