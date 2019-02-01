package com.hexaware.FTP113.persistence;

import com.hexaware.FTP113.model.LeaveDetails;

import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.Mapper;

import java.util.List;

/**
 * The DAO class for LeaveDetails.
 */
public interface LeaveDetailsDAO  {
  /**
   * return all the details of all the Leave_Details.
   * @return the LeaveDetails array
   */
  @SqlQuery("SELECT * FROM Leave_Details")
  @Mapper(LeaveDetailsMapper.class)
  List<LeaveDetails> list();

  /**
   * return all the leave details of the selected leave id.
   * @param leaID the id of the employee
   * @return the employee object
   */
  @SqlQuery("SELECT * FROM Leave_Details WHERE Lea_ID = :leaID")
  @Mapper(LeaveDetailsMapper.class)
  LeaveDetails find(@Bind("leaID") int leaID);

  /**
  * close with no args is used to close the connection.
  */
  void close();
}
